import { type FC } from 'react';

import { SKILL_IMAGES } from '../data/spells';

import '../styles/components/ControlsPanel.css';

export const ControlsPanel: FC = () => {
  const controls = [
    { key: 'Q', action: 'QUAS', image: SKILL_IMAGES.Q },
    { key: 'W', action: 'WEX', image: SKILL_IMAGES.W },
    { key: 'E', action: 'EXORT', image: SKILL_IMAGES.E },
    { key: 'R', action: 'INVOKE', image: SKILL_IMAGES.R },
  ];

  return (
    <div className='controls-panel'>
      <h3 className='panel-title'>CONTROLS</h3>
      <div className='controls-list'>
        {controls.map((control, index) => (
          <div key={index} className='control-item'>
            <div className='control-key'>{control.key}</div>
            <span className='control-action'>- {control.action}</span>
            <img
              src={control.image}
              alt={control.action}
              className='control-icon'
            />
          </div>
        ))}
      </div>
    </div>
  );
};
