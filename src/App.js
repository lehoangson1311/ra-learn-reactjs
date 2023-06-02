import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: "",
    };
  }
  // handleTime = () => {
  //   let thisTime = new Date();
  //   let hour = thisTime.getHours();
  //   if (hour < 10) {
  //     hour = "0" + hour;
  //   }
  //   let min = thisTime.getMinutes();
  //   if (min < 10) {
  //     min = "0" + min;
  //   }
  //   let sec = thisTime.getSeconds();
  //   if (sec < 10) {
  //     sec = "0" + sec;
  //   }
  //   this.setState({ time: "Bây giờ là " + hour + ":" + min + ":" + sec });
  // };
  handleTime = () => {
    let thistime = new Date();
    let spliteThisTime = thistime.toLocaleTimeString().split(" ");
    this.setState({
      time: "Bây giờ là " + spliteThisTime[0],
    });
  };
  componentDidMount() {
    setInterval(this.handleTime, 1000);
  }
  render() {
    return (
      <div className="App">
        <h1>Xin chào các bạn!</h1>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}
export default App;
