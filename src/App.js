import React from "react";
import Child from "./child";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { age: 26, isShowChild: true };
    this.handleChangeAge = this.handleChangeAge.bind(this);

    console.log("app contructor");
  }
  componentWillMount() {
    console.log("app componentWillMount");
  }
  handleChangeAge() {
    this.setState({
      age: 29,
    });
  }
  handleShowChild() {
    this.setState({
      isShowChild: !this.state.isShowChild,
      // age: this.state
    });
  }
  render() {
    console.log("app render");
    return (
      <div>
        <h1>App component</h1>

        <button onClick={this.handleChangeAge}>change age</button>
        <button onClick={this.handleShowChild.bind(this)}>
          Toggle show child
        </button>
        {this.state.isShowChild ? <Child age={this.state.age} /> : null}
      </div>
    );
  }

  componentDidMount() {
    console.log("app componentDidMount");
  }
}
export default App;
