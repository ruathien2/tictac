import React, { useReducer, useState } from "react";
import "./Tictactoe.css";
import Board from "./Board";
import { calculateWinner } from "./helper";

//initialState
// const initialState = {
//   board: Array(9).fill(null),
//   xIsNext: true,
// };

//reducer
// const gamereducer = (state, action) => {
//   switch (action.type) {
//     case "CLICK": {
//       const { board, xIsNext } = state;
//       const { index, winner } = action.payload;
//       if (winner || board[index]) return state;

//       const nextState = JSON.parse(JSON.stringify(state)); //clone state -> tra ve obj
//       console.log(nextState);
//       nextState.board[index] = xIsNext ? "X" : "O";
//       nextState.xIsNext = !xIsNext;
//       // === setState({
//       //   ...state,
//       //   board: boardCopy,
//       //   xIsNext: !state.xIsNext,
//       // });
//       return nextState;
//     }
//     case "RESET": {
//       const nextState = JSON.parse(JSON.stringify(state)); //clone state ban dau
//       nextState.board = Array(9).fill(null);
//       nextState.xIsNext = true;
//       // ===== setState({
//       //   ...state,
//       //   board: Array(9).fill(null),
//       //   xIsNext: true,
//       // });
//       return nextState;
//     }
//     default:
//       break;
//   }
//   return state;
// };

export default function Tictactoe() {
  // const [state, dispatch] = useReducer(gamereducer, initialState);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const [state, setState] = useState({
    board: Array(9).fill(null),
    xIsNext: true,
  });

  const winner = calculateWinner(state.board); //tra ve duong thang
  console.log(winner);

  const handleClick = (index) => {
    const boardCopy = [...state.board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = state.xIsNext ? "X" : "O";
    setState({
      ...state,
      board: boardCopy,
      xIsNext: !state.xIsNext,
    });
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
    console.log(boardCopy);
    // dispatch({
    //   type: "CLICK",
    //   payload: {
    //     index: index,
    //     winner: winner,
    //   },
    // });
  };

  const handleReset = () => {
    setState({
      ...state,
      board: Array(9).fill(null),
      xIsNext: true,
    });
    setXIsNext(true);
    setBoard(Array(9).fill(null));

    // dispatch({
    //   typeof: "RESET",
    // });
  };

  return (
    <div className="tictactoe">
      <Board cells={state.board} onClick={handleClick}></Board>
      <div className="result">{winner ? `Winner is ${winner}` : ""}</div>
      <button className="btn-reset" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}
