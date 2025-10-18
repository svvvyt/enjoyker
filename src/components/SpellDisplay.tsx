import { type FC } from 'react';

import { type Spell } from '../types';

import { SKILL_IMAGES } from '../data/spells';

import '../styles/components/SpellDisplay.css';

interface SpellDisplayProps {
  currentSpell: Spell | null;
  pressedKeys: string[];
  showCombination?: boolean;
}

export const SpellDisplay: FC<SpellDisplayProps> = ({
  currentSpell,
  pressedKeys,
}) => {
  return (
    <div className='spell-display'>
      {currentSpell ? (
        <>
          <div className='spell-info'>
            <img
              src={currentSpell.image}
              alt={currentSpell.name}
              className='spell-image'
            />
            <h2 className='spell-name'>{currentSpell.name}</h2>
          </div>

          <div className='current-combination'>
            <h3>Current Input:</h3>
            <div className='input-keys'>
              {pressedKeys.map((key, index) => (
                <div key={index} className='input-key'>
                  <img
                    src={SKILL_IMAGES[key as keyof typeof SKILL_IMAGES]}
                    alt={key}
                    className='input-key-image'
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className='no-spell'>No spell selected</div>
      )}
    </div>
  );
};
