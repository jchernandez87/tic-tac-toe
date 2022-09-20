import Square from "./Square";

const Board = (props) => {
  const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
  };

  const squares = props.squares.map((el, i) => (
    <Square key={i} value={el} onClick={() => props.onClick(i)} />
  ));

  return <div style={style}>{squares}</div>;
};

export default Board;
