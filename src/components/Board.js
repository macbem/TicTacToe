import React from 'react';
import { Square } from './Square';
import './Board.css';

export const Board = (props) => {
  const squares = props.squares.map( (v, i) => <Square val={v} key={i} index={i} setValue={props.squareClickAction} /> );
  const boardClassName = props.winScenario ? props.winScenario : 'no-scenario';
  return (
    <div className={`Board ${props.isGameActive ? '' : boardClassName}`}>
      <span className="row-1"></span>
      <span className="row-2"></span>
      <span className="row-3"></span>
      <span className="column-1"></span>
      <span className="column-2"></span>
      <span className="column-3"></span>
      <span className="no-scenario-1"></span>
      <span className="no-scenario-2"></span>
      <span className="intersection-1"></span>
      <span className="intersection-2"></span>
      { squares }
    </div>
  )
}
