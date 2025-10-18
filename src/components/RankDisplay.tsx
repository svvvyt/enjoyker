import { type FC } from 'react';

import { type GameResult } from '../types';

import { formatRankTime, getNextRank } from '../utils';

import '../styles/components/RankDisplay.css';

interface RankDisplayProps {
  result: GameResult;
  onRestart: () => void;
}

export const RankDisplay: FC<RankDisplayProps> = ({ result, onRestart }) => {
  const { rank, time } = result;
  const nextRank = getNextRank(rank);

  return (
    <div className='rank-display'>
      <div className='rank-header'>
        <h2>Training Complete!</h2>
        <p>You've casted all spells!</p>
      </div>

      <div className='rank-main'>
        <div className='rank-image-container'>
          <img src={rank.image} alt={rank.name} className='rank-image' />
          <div className='rank-glow'></div>
        </div>

        <div className='rank-info'>
          <h3 className='rank-name'>{rank.name}</h3>
          <div className='rank-stats'>
            <div className='stat'>
              <span className='stat-label'>Time:</span>
              <span className='stat-value'>{formatRankTime(time)}</span>
            </div>
            <div className='stat'>
              <span className='stat-label'>Rank:</span>
              <span className='stat-value rank-tier'>{rank.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='rank-actions'>
        <button className='restart-button modern-button' onClick={onRestart}>
          Try Again
        </button>
      </div>

      <div className='rank-progress'>
        {nextRank ? (
          <p>
            Next rank: Beat {formatRankTime(nextRank.maxTime)} for{' '}
            {nextRank.name}
          </p>
        ) : (
          <p>🎉 You've reached the highest rank! 🎉</p>
        )}
      </div>
    </div>
  );
};
