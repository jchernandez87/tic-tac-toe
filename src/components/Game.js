import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];

    if (winner || boardCopy[i]) return;

    boardCopy[i] = xIsNext ? "X" : "O";

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const jumpTo = () => {};

  const renderMoves = () => {};

  return <Board squares={board} onClick={handleClick} />;
};

export default Game;
