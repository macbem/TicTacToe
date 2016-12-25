import React, { Component } from 'react';
import { Square } from './Square';
import './Board.css';

export class Board extends Component {
  constructor(props) {
    super();
    this.state = {
      squares: Array(9).fill(null),
      isONext: true,
      isGameActive: true,
      winner: null,
      history: []
    };
  }w
  didPlayerWin = (player) => {
    const squares = this.state.squares;
    const squareRows = [ squares.slice(0,3), squares.slice(3,6), squares.slice(6,9) ];
    const crossedSquares = [
      [ squares[0], squares[4], squares[8] ],
      [ squares[2], squares[4], squares[6] ]
    ];
    const squareColumns = [
      [ squares[0], squares[3], squares[6] ],
      [ squares[1], squares[4], squares[7] ],
      [ squares[2], squares[5], squares[8] ]
    ];
    const combinations = [
      crossedSquares,
      squareColumns,
      squareRows
    ];

    return combinations.some( (arr) => arr.some( (el) => el.filter( (item) => item === player ).length === 3 ) );
  }
  runScoreChecks = () => {
    const squares = this.state.squares;
    if ( squares.filter( (el) => el === 'x' ).length < 3 && squares.filter( (el) => el === 'o' ).length < 3 ) {
      return false;
    }
    this.didPlayerWin( this.state.isONext ? 'o' : 'x');
    if(squares.filter( (el) => el ).length === 9) {
      this.setState({isGameActive: false});
    }
    console.log(this.didPlayerWin( this.state.isONext ? 'o' : 'x'));
  }
  setSquareValue = (idx) => {
    const squares = this.state.squares;
    squares[idx] = this.state.isONext ? 'o' : 'x';
    const isONext = !this.state.isONext;
    const history = this.state.history.concat([squares]);
    this.setState( { squares, isONext, history } );
    this.runScoreChecks();
  }
  setSquares() {
    return this.state.squares.map( (v, i) => <Square val={v} key={i} index={i} setValue={this.setSquareValue} /> );
  }
  render() {
    return (
      <div className='Board'>
        { this.setSquares() }
      </div>
    )
  }
}
