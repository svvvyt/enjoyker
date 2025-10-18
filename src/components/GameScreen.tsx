import { type FC } from 'react';

import type { Spell, GameStatus, GameResult } from '../types';

import { Timer, SpellDisplay, SkillBar, RankDisplay } from './index';

import '../styles/components/GameScreen.css';

interface GameScreenProps {
  gameStatus: GameStatus;
  time: number;
  currentSpell: Spell | null;
  pressedKeys: string[];
  completedSpells: number;
  totalSpells: number;
  gameResult: GameResult | null;
  onRestart: () => void;
}

export const GameScreen: FC<GameScreenProps> = ({
  gameStatus,
  time,
  currentSpell,
  pressedKeys,
  completedSpells,
  totalSpells,
  gameResult,
  onRestart,
}) => {
  return (
    <div className='game-screen'>
      {gameStatus === 'playing' ? (
        <>
          <div className='game-header'>
            <Timer time={time} />
            <div className='progress'>
              {completedSpells} / {totalSpells}
            </div>
          </div>

          <SkillBar pressedKeys={pressedKeys} />
          <SpellDisplay
            currentSpell={currentSpell}
            pressedKeys={pressedKeys}
            showCombination={false}
          />
        </>
      ) : (
        gameResult && <RankDisplay result={gameResult} onRestart={onRestart} />
      )}
    </div>
  );
};
