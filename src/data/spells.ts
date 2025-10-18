import { type Spell } from '../types';

export const INVOKER_SPELLS: Spell[] = [
  {
    name: 'COLD SNAP',
    combination: ['Q', 'Q', 'Q'],
    keys: ['Q', 'Q', 'Q', 'R'],
    requiredOrbs: { Q: 3, W: 0, E: 0 },
    image: '/img/spells/cold_snap.png',
  },
  {
    name: 'GHOST WALK',
    combination: ['Q', 'Q', 'W'],
    keys: ['Q', 'Q', 'W', 'R'],
    requiredOrbs: { Q: 2, W: 1, E: 0 },
    image: '/img/spells/ghost_walk.png',
  },
  {
    name: 'ICE WALL',
    combination: ['Q', 'Q', 'E'],
    keys: ['Q', 'Q', 'E', 'R'],
    requiredOrbs: { Q: 2, W: 0, E: 1 },
    image: '/img/spells/ice_wall.png',
  },
  {
    name: 'EMP',
    combination: ['W', 'W', 'W'],
    keys: ['W', 'W', 'W', 'R'],
    requiredOrbs: { Q: 0, W: 3, E: 0 },
    image: '/img/spells/EMP.png',
  },
  {
    name: 'TORNADO',
    combination: ['W', 'W', 'Q'],
    keys: ['W', 'W', 'Q', 'R'],
    requiredOrbs: { Q: 1, W: 2, E: 0 },
    image: '/img/spells/tornado.png',
  },
  {
    name: 'ALACRITY',
    combination: ['W', 'W', 'E'],
    keys: ['W', 'W', 'E', 'R'],
    requiredOrbs: { Q: 0, W: 2, E: 1 },
    image: '/img/spells/alacrity.png',
  },
  {
    name: 'SUN STRIKE',
    combination: ['E', 'E', 'E'],
    keys: ['E', 'E', 'E', 'R'],
    requiredOrbs: { Q: 0, W: 0, E: 3 },
    image: '/img/spells/sun_strike.png',
  },
  {
    name: 'FORGE SPIRIT',
    combination: ['E', 'E', 'Q'],
    keys: ['E', 'E', 'Q', 'R'],
    requiredOrbs: { Q: 1, W: 0, E: 2 },
    image: '/img/spells/forge_spirit.png',
  },
  {
    name: 'CHAOS METEOR',
    combination: ['E', 'E', 'W'],
    keys: ['E', 'E', 'W', 'R'],
    requiredOrbs: { Q: 0, W: 1, E: 2 },
    image: '/img/spells/chaos_meteor.png',
  },
  {
    name: 'DEAFENING BLAST',
    combination: ['Q', 'W', 'E'],
    keys: ['Q', 'W', 'E', 'R'],
    requiredOrbs: { Q: 1, W: 1, E: 1 },
    image: '/img/spells/deafening_blast.png',
  },
];

export const SKILL_IMAGES = {
  Q: '/img/spheres/quas.png',
  W: '/img/spheres/wex.png',
  E: '/img/spheres/exort.png',
  R: '/img/spheres/invoke.png',
  placeholder: '/img/spheres/spell_placeholder.png',
};
