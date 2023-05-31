import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = { text: "hello" };
  }
  handleClick03() {
    alert(this.state.text);
  }
  handleClick(value) {
    alert(value);
  }
  render() {
    return (
      <div>
        <h1>Vi du Event</h1>
        <button onClick={() => this.handleClick("Button 01 clicked")}>
          button 01
        </button>
        <button onClick={() => this.handleClick("Button 02 clicked")}>
          button 02
        </button>
        <button onClick={() => this.handleClick03()}>button 03</button>
      </div>
    );
  }
}
export default App;
