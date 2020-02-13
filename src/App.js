import React, { Component } from "react";
import Layout from "./hoc/Layout";
import Quiz from "./containers/Quiz";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Quiz />
      </Layout>
    );
  }
}

export default App;
