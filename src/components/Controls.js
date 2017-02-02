import React from 'react';
import './Controls.css';

export const Controls = (props) => {
  return (
    <div className="Controls">
      <button onClick={props.newGame}>New game</button>
      <button onClick={props.resetGame}>Reset scores</button>
    </div>
  )
}
