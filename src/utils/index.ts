import type { Spell, Rank } from '../types';
import { RANKS } from '../data/ranks';

// Функция для проверки правильности комбинации (порядок орбов не важен)
export const checkSpellCombination = (
  keys: string[],
  spell: Spell
): boolean => {
  // Проверяем, что последняя клавиша - R
  if (keys.length !== 4 || keys[3] !== 'R') {
    return false;
  }

  // Считаем количество каждого орба в введенной комбинации (первые 3 клавиши)
  const orbCount = {
    Q: keys.slice(0, 3).filter((key) => key === 'Q').length,
    W: keys.slice(0, 3).filter((key) => key === 'W').length,
    E: keys.slice(0, 3).filter((key) => key === 'E').length,
  };

  // Сравниваем с требуемым количеством орбов
  return (
    orbCount.Q === spell.requiredOrbs.Q &&
    orbCount.W === spell.requiredOrbs.W &&
    orbCount.E === spell.requiredOrbs.E
  );
};

// Функция для перемешивания массива заклинаний
export const shuffleSpells = (spells: Spell[]): Spell[] => {
  return [...spells].sort(() => Math.random() - 0.5);
};

// Функция для получения случайного заклинания из массива
export const getRandomSpell = (spells: Spell[]): Spell | null => {
  if (spells.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * spells.length);
  return spells[randomIndex];
};

// Функция для форматирования времени
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs
    .toString()
    .padStart(2, '0')}`;
};

export const getRankByTime = (time: number): Rank => {
  const sortedRanks = [...RANKS].sort((a, b) => a.maxTime - b.maxTime);

  for (const rank of sortedRanks) {
    if (time <= rank.maxTime) {
      return rank;
    }
  }

  return sortedRanks[sortedRanks.length - 1];
};

export const formatRankTime = (time: number): string => {
  const mins = Math.floor(time / 60);
  const secs = time % 60;
  if (mins > 0) {
    return `${mins}m ${secs}s`;
  }
  return `${secs}s`;
};

export const getNextRank = (currentRank: Rank): Rank | null => {
  const currentIndex = RANKS.findIndex(
    (rank) => rank.name === currentRank.name
  );
  return currentIndex > 0 ? RANKS[currentIndex - 1] : null;
};
