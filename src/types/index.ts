export interface Spell {
  name: string;
  combination: string[];
  keys: string[];
  image: string;
  requiredOrbs: { Q: number; W: number; E: number };
}

export type GameStatus = 'idle' | 'playing' | 'finished';

export interface Rank {
  name: string;
  maxTime: number;
  image: string;
}

export interface GameResult {
  time: number;
  rank: Rank;
}
