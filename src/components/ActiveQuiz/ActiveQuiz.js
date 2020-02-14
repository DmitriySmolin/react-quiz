import React from "react";
import AnswersList from "./AnswersList/AnsersList/AnswersList";
import "./ActiveQuiz.css";
const ActiveQuiz = props => {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>{props.answerNumber}.&nbsp;</strong>
          {props.question}
        </span>
        <small>
          {props.answerNumber} из {props.quizLength}
        </small>
      </p>
      <AnswersList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
};

export default ActiveQuiz;
