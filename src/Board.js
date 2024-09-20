import React from "react";
import Cell from "./Cell";

export default function Board(props) {
  return (
    <div className="board">
      {props.cells.map((item, index) => {
        return (
          <Cell
            key={index}
            value={item}
            onClick={() => props.onClick(index)} //De biest dang nhan vao o nao
            className={
              item && item === "X" ? "is-x" : item === "O" ? "is-o" : ""
            }
          ></Cell>
        );
      })}
    </div>
  );
}
