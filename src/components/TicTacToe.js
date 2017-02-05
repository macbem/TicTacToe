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
      winningScenario: null,
      squares: Array(9).fill(null),
      currentPlayer: Math.random() >= 0.5 ? 'x' : 'o',
      scores: {
        x: 0,
        o: 0
      }
    };

    this.validate = validate.bind(this);
  }

  resetGame = () => {
    this.setState({
      winner: null,
      isGameActive: true,
      squares: Array(9).fill(null),
      winningScenario: null,
      scores: {
        x: 0,
        o: 0
      },
      currentPlayer: Math.random() >= 0.5 ? 'x' : 'o'
    });
  }

  newGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      isGameActive: true,
      currentPlayer: Math.random() >= 0.5 ? 'x' : 'o',
      winner: null,
      winningScenario: null
    });
  }

  runScoreChecks = () => {
    const squares = this.state.squares;

    if ( squares.filter( (el) => el !== null  ).length < 5) {
      return;
    }

    if (this.validate()) {
      this.setWinner(this.state.currentPlayer, this.validate());
      return;
    }

    if(squares.filter( (el) => el ).length === 9) {
      this.setWinner("none");
      return;
    }
  }

  setWinner = (winner, winningScenario = null) => {
    const isGameActive = false;

    const {scores} = this.state;

    if(winner && winner !== "none") {
      scores[winner]++;
    }

    this.setState( {winner, isGameActive, scores, winningScenario} );
  }

  setSquareValue = (idx) => {
    if(!this.state.isGameActive) return false;

    const {squares, currentPlayer} = this.state;

    squares[idx] = currentPlayer;

    const nextPlayer = currentPlayer === 'x' ? 'o' : 'x';

    this.setState( {squares, currentPlayer: nextPlayer} );

    this.runScoreChecks();
  }

  render() {
    return (
      <div className="tictactoe">
        <h1>Tic Tac Toe</h1>
        <ScoreDisplay
          winner={this.state.winner}
          scores={this.state.scores}
          currentPlayer={this.state.currentPlayer}
        />
        <Board 
          isGameActive={this.state.isGameActive}
          winningScenario={this.state.winningScenario}
          squares={this.state.squares}
          squareClickAction={this.setSquareValue}
        />
        <Controls newGame={this.newGame} resetGame={this.resetGame} />
      </div>
    );
  }
}
