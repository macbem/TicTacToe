import React, { Component } from 'react';
import { Board } from '../components/Board';
import { ScoreDisplay } from '../components/ScoreDisplay';
import validate from '../helpers/validation';
import { Controls } from '../components/Controls';
import './TicTacToe.css';

export class TicTacToe extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState;

    this.validate = validate.bind(this);
  }

  get initialState() {
    return {
      winner: null,
      isGameActive: true,
      winScenario: null,
      squares: Array(9).fill(null),
      currentPlayer: Math.random() >= 0.5 ? 'x' : 'o',
      score: {
        x: 0,
        o: 0
      }
    };
  }

  resetGame = () => {
    this.setState(this.initialState);
  }

  newGame = () => {
    const currentScore = this.state.score;
    this.setState({
      ...this.initialState,
      score: currentScore
    });
  }

  runScoreChecks = () => {
    const { squares, currentPlayer } = this.state;

    if ( squares.filter( (el) => el !== null  ).length < 5) {
      return;
    }

    const validationResult = this.validate();

    if (validationResult) {
      this.setWinner(currentPlayer, validationResult);
      return;
    }

    if(squares.filter( (el) => el ).length === 9) {
      this.setDraw();
      return;
    }
  }

  setDraw = () => {
    this.setState({ winner: "none", isGameActive: false });
  }

  setWinner = (winner, winScenario) => {
    const isGameActive = false;

    const { score } = this.state;

    ++score[winner];

    this.setState({ winner, isGameActive, score, winScenario });
  }

  setSquareValue = (squareIndex) => {
    const { squares, currentPlayer, isGameActive } = this.state;

    if(!isGameActive) return false;

    squares[squareIndex] = currentPlayer;

    const nextPlayer = currentPlayer === 'x' ? 'o' : 'x';

    this.setState({ squares, currentPlayer: nextPlayer });

    this.runScoreChecks();
  }

  render() {
    return (
      <div className="tictactoe">
        <h1>Tic Tac Toe</h1>
        <ScoreDisplay
          winner={this.state.winner}
          score={this.state.score}
          currentPlayer={this.state.currentPlayer}
        />
        <Board
          isGameActive={this.state.isGameActive}
          winScenario={this.state.winScenario}
          squares={this.state.squares}
          squareClickAction={this.setSquareValue}
        />
        <Controls newGame={this.newGame} resetGame={this.resetGame} />
      </div>
    );
  }
}
