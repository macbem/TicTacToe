export default function validate() {
  const {squares, currentPlayer} = this.state;

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

  const winScenarios = [
    { name: "intersection", tests: crossedSquares },
    { name: "column", tests: squareColumns },
    { name: "row", tests: squareRows}
  ];

  const validateScenario = (el) => el.filter( (item) => item === currentPlayer ).length === 3;

  for(let scenario of winScenarios) {
    for(let i = 0; i < scenario.tests.length; ++i) {
      if( validateScenario( scenario.tests[i] ) ) {
        return `${scenario.name}-${++i}`;
      }
    }
  }

  return false;
}
