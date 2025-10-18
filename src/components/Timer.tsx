import { type FC } from 'react';

import { formatTime } from '../utils';

import '../styles/components/Timer.css';

interface TimerProps {
  time: number;
}

export const Timer: FC<TimerProps> = ({ time }) => {
  return (
    <div className='timer'>
      <div className='time-display'>{formatTime(time)}</div>
    </div>
  );
};
