import React, { Component } from "react";
import "./QuizCreator.css";
import Button from "../../components/UI/Button/Button";
export default class QuizCreator extends Component {
  submitHandler = event => {
    event.preventDefault();
  };
  addQuestionHandler = () => {};
  createQuizHandler = () => {};

  render() {
    return (
      <div className="QuizCreator">
        <div>
          <h1>Создание теста</h1>
          <form onSubmit={this.submitHandler}>
            <input type="text" />
            <hr />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <select></select>
            <Button type="btnPrimary" onClick={this.addQuestionHandler}>
              Добавить вопрос
            </Button>
            <Button type="btnSuccess" onClick={this.createQuizHandler}>
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
