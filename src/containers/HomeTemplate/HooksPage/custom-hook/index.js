import React from "react";
import Circle from "./circle";
import Square from "./square";

export default function CustomHook() {
  return (
    <div>
      <h1>CustomHook</h1>
      <Square />
      <br />
      <Circle />
    </div>
  );
}
