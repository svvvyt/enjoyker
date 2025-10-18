import { type FC } from 'react';

import { useGame } from '../hooks/useGame';

import { StartScreen, GameScreen, ControlsPanel, SpellsPanel } from './index';

import '../styles/components/Game.css';

export const Game: FC = () => {
  const {
    gameStatus,
    time,
    currentSpell,
    pressedKeys,
    completedSpells,
    gameResult,
    startGame,
    restartGame,
    totalSpells,
  } = useGame();

  return (
    <div className='game-layout'>
      {/* Левая панель - Controls */}
      <div className='left-panel'>
        <ControlsPanel />
      </div>

      {/* Центральная часть - Игра */}
      <div className='center-panel'>
        <div className='game-container'>
          {gameStatus === 'idle' ? (
            <div className='start-screen-wrapper'>
              <StartScreen onStart={startGame} />
            </div>
          ) : (
            <GameScreen
              gameStatus={gameStatus}
              time={time}
              currentSpell={currentSpell}
              pressedKeys={pressedKeys}
              completedSpells={completedSpells}
              totalSpells={totalSpells}
              gameResult={gameResult}
              onRestart={restartGame}
            />
          )}
        </div>
      </div>

      {/* Правая панель - Spells */}
      <div className='right-panel'>
        <SpellsPanel />
      </div>
    </div>
  );
};
