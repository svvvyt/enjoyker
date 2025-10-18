import { useState, useEffect, useCallback } from 'react';

import type { Spell, GameStatus, GameResult } from '../types';

import { INVOKER_SPELLS } from '../data/spells';

import {
  checkSpellCombination,
  shuffleSpells,
  getRandomSpell,
  getRankByTime,
} from '../utils';

export const useGame = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>('idle');
  const [time, setTime] = useState(0);
  const [currentSpell, setCurrentSpell] = useState<Spell | null>(null);
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [remainingSpells, setRemainingSpells] = useState<Spell[]>([]);
  const [completedSpells, setCompletedSpells] = useState<number>(0);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);

  const startGame = useCallback(() => {
    setGameStatus('playing');
    setTime(0);
    setCompletedSpells(0);
    const shuffledSpells = shuffleSpells(INVOKER_SPELLS);
    setRemainingSpells(shuffledSpells);
    setCurrentSpell(shuffledSpells[0]);
    setPressedKeys([]);
  }, []);

  const finishGame = useCallback(() => {
    const result: GameResult = {
      time,
      rank: getRankByTime(time),
    };
    setGameResult(result);
    setGameStatus('finished');
    setCurrentSpell(null);
    setPressedKeys([]);
  }, [time]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (gameStatus !== 'playing') return;

      const key = event.key.toUpperCase();
      if (['Q', 'W', 'E', 'R'].includes(key)) {
        setPressedKeys((prev) => {
          const newKeys = [...prev, key];

          // Проверяем комбинацию только когда нажато 4 клавиши
          if (newKeys.length === 4 && currentSpell) {
            const isCorrect = checkSpellCombination(newKeys, currentSpell);

            if (isCorrect) {
              // Успешный каст - переходим к следующему заклинанию
              const newRemaining = remainingSpells.filter(
                (spell) => spell.name !== currentSpell.name
              );
              setRemainingSpells(newRemaining);
              setCompletedSpells((prev) => prev + 1);

              if (newRemaining.length === 0) {
                finishGame();
                return [];
              }

              const nextSpell = getRandomSpell(newRemaining);
              setCurrentSpell(nextSpell);
              return [];
            } else {
              // Неправильная комбинация - сбрасываем ввод
              return [];
            }
          }

          return newKeys;
        });
      }
    },
    [gameStatus, currentSpell, remainingSpells, finishGame]
  );

  // Timer effect
  useEffect(() => {
    let interval: any;

    if (gameStatus === 'playing') {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [gameStatus]);

  // Keyboard event effect
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const restartGame = useCallback(() => {
    startGame();
  }, [startGame]);

  return {
    gameStatus,
    time,
    currentSpell,
    pressedKeys,
    completedSpells,
    startGame,
    restartGame,
    gameResult,
    totalSpells: INVOKER_SPELLS.length,
  };
};
