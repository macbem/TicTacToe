import React from 'react';
import './Square.css';

export const Square = (props) => {
  const handleClick = () => props.val ? false : props.setValue(props.index);
  const status = props.val ? ` ${props.val}-square` : '';
  return (
    <div className={`Square${status}`} onClick={handleClick}>
      {props.val ? props.val : ''}
    </div>
  )
}
