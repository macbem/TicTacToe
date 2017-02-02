export default function validate() {
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

  const currentPlayer = this.state.isXnext ? 'o' : 'x';

  const result = combinations.some( (arr) => arr.some( (el) => el.filter( (item) => item === currentPlayer ).length === 3 ) );

  return result;
}
