import { type FC } from 'react';

import { SKILL_IMAGES } from '../data/spells';

import '../styles/components/SkillBar.css';

interface SkillBarProps {
  pressedKeys: string[];
}

export const SkillBar: FC<SkillBarProps> = ({ pressedKeys }) => {
  const getSkillImage = (position: number) => {
    if (position < pressedKeys.length) {
      const key = pressedKeys[position];
      return SKILL_IMAGES[key as keyof typeof SKILL_IMAGES];
    }
    return SKILL_IMAGES.placeholder;
  };

  return (
    <div className='skill-bar'>
      <div className='skill-slots'>
        {[0, 1, 2].map((position) => (
          <div key={position} className='skill-slot'>
            <img
              src={getSkillImage(position)}
              alt={`Skill ${position + 1}`}
              className='skill-icon'
            />
          </div>
        ))}
      </div>
      <div className='invoke-slot'>
        <img src={SKILL_IMAGES.R} alt='Invoke' className='invoke-icon' />
      </div>
    </div>
  );
};
