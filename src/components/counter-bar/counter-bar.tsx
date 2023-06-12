import React from "react";
import "./counter-bar.scss";

export interface CounterBarProps {
  title: string;
  onClick?: () => void
}

const CounterBar = ({ title, onClick }: CounterBarProps) => {
  return (
    <div className="counter-bar">
      <span onClick={onClick}>{title}</span>
    </div>
  );
};

export default CounterBar;
