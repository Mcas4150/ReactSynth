import React from "react";
import "./analyzer.css";

export default function Analyzer(props) {
  const { name } = props;
  return (
    <div className="audio-unit">
      <h3>analyzer</h3>
      <div className="analyzer">
        <canvas id={name} width={200} height={120} />
      </div>
    </div>
  );
}
