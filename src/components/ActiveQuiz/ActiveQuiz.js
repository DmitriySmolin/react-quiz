import React from "react";
import AnswersList from "./AnswersList/AnsersList/AnswersList";
import "./ActiveQuiz.css";
const ActiveQuiz = props => {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>2.&nbsp;</strong>
          Как дела?
        </span>
        <small>4 из 12</small>
      </p>
      <AnswersList answers={props.answers} />
    </div>
  );
};

export default ActiveQuiz;
