import React from "react";
import "./counter-bar.scss";

export interface CounterBarProps {
  title: string;
}

const CounterBar = ({ title }: CounterBarProps) => {
  return (
    <div className="counter-bar">
      <span>{title}</span>
    </div>
  );
};

export default CounterBar;
