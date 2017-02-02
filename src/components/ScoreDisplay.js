import React from 'react';
import './ScoreDisplay.css';

export const ScoreDisplay = (props) => {
  const status = props.winner ? `${props.winner}-won` : `${props.currentPlayer}-playing`;
  return (
    <div className={`${status} ScoreDisplay`}>
        <div className="score-of-x">
          <span className="x-element">X</span>
          <span className="scoreValue">{props.scores.x}</span>
        </div>
        <div className="score-of-o">
          <span className="o-element">O</span>
          <span className="scoreValue">{props.scores.o}</span>
        </div>
    </div>
  )
}
