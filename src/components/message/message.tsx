import React from "react";
import "./message.scss";

export interface Message {
  content: string;
}

const Message = ({ content }: Message) => {
  return (
    <div className="message">
      <span>{content}</span>
    </div>
  );
};

export default Message;
