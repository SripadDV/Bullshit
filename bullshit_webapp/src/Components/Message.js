import React from "react";
import "./Message.css";

function Message(props) {
  const message = props.message;
  return <div className="message">{message}</div>;
}

export default Message;
