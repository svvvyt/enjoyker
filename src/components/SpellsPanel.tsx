import { type FC } from 'react';

import { INVOKER_SPELLS, SKILL_IMAGES } from '../data/spells';

import '../styles/components/SpellsPanel.css';

export const SpellsPanel: FC = () => {
  const getCombinationDisplay = (combination: string[]) => {
    return combination.map((key, index) => (
      <div key={index} className='spell-key'>
        <img
          src={SKILL_IMAGES[key as keyof typeof SKILL_IMAGES]}
          alt={key}
          className='spell-key-icon'
        />
      </div>
    ));
  };

  return (
    <div className='spells-panel'>
      <h3 className='panel-title'>SPELLS TABLE</h3>
      <div className='panel-info'>
        <p className='order-hint'>Order of orbs does not matter!</p>
      </div>
      <div className='spells-list'>
        {INVOKER_SPELLS.map((spell, index) => (
          <div key={index} className='spell-item'>
            <div className='spell-panel-info'>
              <img src={spell.image} alt={spell.name} className='spell-icon' />
              <span className='spell-name'>{spell.name}</span>
            </div>
            <div className='spell-combination'>
              {getCombinationDisplay(spell.combination)}
              <div className='spell-key invoke'>
                <img src={SKILL_IMAGES.R} alt='R' className='spell-key-icon' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
