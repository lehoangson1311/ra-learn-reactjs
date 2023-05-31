import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { studentName: "Trung" };
  }

  render() {
    return <div>student name:{this.state.studentName}</div>;
  }
}

export default App;
