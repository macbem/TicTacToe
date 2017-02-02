import React, { Component } from 'react';
import { Board } from './Board';
import { ScoreDisplay } from './ScoreDisplay';
import validate from '../modules/validation';
import { Controls } from './Controls';
import './TicTacToe.css';

export class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      isGameActive: true,
      squares: Array(9).fill(null),
      isXnext: Math.random() >= 0.5,
      scores: {
        x: 0,
        o: 0
      }
    };
    this.validate = validate.bind(this);
  }
  runScoreChecks = () => {
    const squares = this.state.squares;
    if ( squares.filter( (el) => el !== null  ).length < 5) {
      return;
    }
    if (this.validate()) {
      this.setWinner(this.state.isXnext ? 'o' : 'x');
      return;
    }
    if(squares.filter( (el) => el ).length === 9) {
      this.setWinner("none");
    }
  }
  setWinner = (winner) => {
    const isGameActive = false;
    const scores = JSON.parse(JSON.stringify(this.state.scores));
    if(winner && winner !== "none") {
      scores[winner]++;
    }
    this.setState( {winner, isGameActive, scores} );
  }
  setSquareValue = (idx) => {
    if(!this.state.isGameActive) return false;
    const squares = this.state.squares;
    const isXnext = !this.state.isXnext;
    squares[idx] = this.state.isXnext ? 'o' : 'x';
    this.setState( {squares, isXnext} );
    this.runScoreChecks();
  }
  newGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      isGameActive: true,
      isXnext: Math.random() >= 0.5,
      winner: null
    });
  }
  resetGame = () => {
    this.setState({
      winner: null,
      isGameActive: true,
      squares: Array(9).fill(null),
      scores: {
        x: 0,
        o: 0
      },
      isXnext: Math.random() >= 0.5
    });
  }
  render() {
    return (
      <div className="tictactoe">
        <h1>Tic Tac Toe</h1>
        <ScoreDisplay
          winner={this.state.winner}
          scores={this.state.scores}
          currentPlayer={this.state.isXnext ? 'o' : 'x'}
        />
        <Board isGameActive={this.state.isGameActive} squares={this.state.squares} squareClickAction={this.setSquareValue} />
        <Controls newGame={this.newGame} resetGame={this.resetGame} />
      </div>
    );
  }
}
