import React from 'react';
import { Square } from './Square';
import './Board.css';

export const Board = (props) => {
  const squares = props.squares.map( (v, i) => <Square val={v} key={i} index={i} setValue={props.squareClickAction} /> );
  let boardClassName = props.winningScenario ? props.winningScenario : 'no-scenario';
  return (
    <div className={`Board ${props.isGameActive ? '' : boardClassName}`}>
      <span className="row-1 result-representation"></span>
      <span className="row-2 result-representation"></span>
      <span className="row-3 result-representation"></span>
      <span className="column-1 result-representation"></span>
      <span className="column-2 result-representation"></span>
      <span className="column-3 result-representation"></span>
      <span className="no-scenario-1 result-representation"></span>
      <span className="no-scenario-2 result-representation"></span>
      <span className="intersection-1 result-representation"></span>
      <span className="intersection-2 result-representation"></span>
      { squares }
    </div>
  )
}
