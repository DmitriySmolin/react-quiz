import React from "react";
import AnswersList from "./AnswersList/AnsersList/AnswersList";
import "./ActiveQuiz.css";
const ActiveQuiz = props => {
  return (
    <div className="ActiveQuiz">
      <p className="Question">
        <span>
          <strong>{props.questionNumber}.&nbsp;</strong>
          {props.question}
        </span>
        <small>
          {props.questionNumber} из {props.quizLength}
        </small>
      </p>
      <AnswersList
        answers={props.answers}
        answerState={props.answerState}
        onAnswerClick={props.onAnswerClick}
      />
    </div>
  );
};

export default ActiveQuiz;
