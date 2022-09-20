import Square from "./Square";

const Board = (props) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const squares = arr.map(el => <Square key={el} value={el} onClick={props.onClick} />)

  return (
    <div>
      {squares}
    </div>
  );
};

export default Board;
