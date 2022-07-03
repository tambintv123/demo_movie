import React from "react";
import "./style.css";
import { useMagicColor } from "./useMagicColor";

export default function Square() {
  const state = useMagicColor();

  return (
    <div className="square" style={{ backgroundColor: state }}>
      Square
    </div>
  );
}
