import React from 'react';
import { Square } from './Square';
import './Board.css';

export const Board = (props) => {
  const squares = props.squares.map( (v, i) => <Square val={v} key={i} index={i} setValue={props.squareClickAction} /> );
  return (
    <div className={`Board ${props.isGameActive ? '' : 'inactive'}`}>{ squares }</div>
  )
}
