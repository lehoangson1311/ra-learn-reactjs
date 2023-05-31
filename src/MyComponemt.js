import React from "react";
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>hello {this.props.studentName}</p>
        <p>Welcome {this.props.studentName} to rikkei academy</p>
      </div>
    );
  }
}
export default MyComponent;
