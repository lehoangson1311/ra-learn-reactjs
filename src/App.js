import React from "react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { studentName: "Trung" };
    this.changeStudentName = this.changeStudentName.bind(this);
  }
  changeStudentName() {
    this.setState({ studentName: "Sáng" });
  }
  render() {
    return (
      <div>
        student name:{this.state.studentName}
        <button onClick={this.changeStudentName}>change name</button>
      </div>
    );
  }
}

export default App;
