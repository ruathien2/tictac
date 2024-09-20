import React from "react";

export default function Cell(props) {
  // obj destructuring
  const { value, onClick, className } = props;
  return (
    <div className={`cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
}
