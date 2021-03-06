import React from "react";
import "./AnswerItem.css";

const AnswerItem = props => {
  const cls = ["AnswerItem"];
  if (props.answerState) {
    cls.push(props.answerState);
  }
  return (
    <li
      className={cls.join(" ")}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
