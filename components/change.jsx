import { Component } from "react";

class Change extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Writen By Sufiyan",
    };
  }
  componentDidMount() {
    console.log("Hello This Is Sufiyan ");
  }
  componentDidUpdate() {
    console.log("Hello This Is Me ");
  }
  changeState = () => {
    this.setState({
      name: "Writen By Dark Devil ",
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeState}>Change Me</button>
      </>
    );
  }
}
export default Change;