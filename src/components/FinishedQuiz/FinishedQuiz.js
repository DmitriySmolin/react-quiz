import React from "react";
import Button from "../UI/Button/Button";
import "./FinishedQuiz.css";
const FinishedQuiz = props => {
  const succesCount = Object.keys(props.results).reduce((total, index) => {
    if (props.results[index] === "success") {
      total++;
    }
    return total;
  }, 0);
  return (
    <div className="FinishedQuiz">
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
            props.results[quizItem.id]
          ];
          return (
            <li key={index}>
              <strong>{index + 1}</strong>.&nbsp;
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>

      <p>
        Правильно {succesCount} из {props.quiz.length}
      </p>

      <div>
        <Button onRetry={props.onRetry} type="btnPrimary">
          Повторить
        </Button>
        <Button onRetry={props.onRetry} type="btnSuccess">
          Перейти в список тестов
        </Button>
      </div>
    </div>
  );
};
export default FinishedQuiz;