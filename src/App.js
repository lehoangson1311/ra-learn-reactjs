import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./MyComponemt";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyComponent studentName="thái"></MyComponent>
        <MyComponent studentName="sơn" />
      </div>
    );
  }
}

export default App;
