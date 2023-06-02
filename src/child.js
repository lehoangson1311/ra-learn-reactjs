import React from "react";
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "sơn" };
    console.log(" contructor đã chạy");
  }
  componentWillMount() {
    console.log("child componentWillMount đã chạy");
  }
  handleChangeState = () => {
    this.setState({
      name: "Tín",
    });
  };
  render() {
    console.log("child render đã chạy");
    return (
      <div>
        <div>
          <h3>Child component</h3>
          <p>Name:{this.state.name}</p>
          <p>Age:{this.props.age}</p>
          <button onClick={this.handleChangeState}>Change name</button>
        </div>
      </div>
    );
  }
  componentDidMount() {
    console.log(" componentDidMount đã chạy");
  }
}
export default Child;
