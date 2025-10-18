import { type FC } from 'react';

import '../styles/components/StartScreen.css';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className='start-screen glass-heavy fade-in'>
      <div className='hero-section'>
        <div className='invoker-hero float'>
          <img src='/img/invoker.gif' alt='Invoker' className='invoker-image' />
          <div className='hero-glow'></div>
        </div>

        <div className='title-section'>
          <h1 className='main-title'>
            <span className='title-gradient'>INVOKER</span>
            <span className='title-sub'>MASTERY</span>
          </h1>
          <div className='title-decoration'>
            <div className='decoration-line'></div>
            <div className='badge'>SPELLCAST TRAINING</div>
            <div className='decoration-line'></div>
          </div>
        </div>

        <button className='start-button modern-button' onClick={onStart}>
          <span className='button-content'>
            <span className='button-text'>START</span>
            <span className='button-arrow'>→</span>
          </span>
        </button>
      </div>
    </div>
  );
};
