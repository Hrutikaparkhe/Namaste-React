import React from "react";
import UserData from "./UserData";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          Click Me
        </button>
        <h4>Counter: {this.state.counter}</h4>
        <div className="about-container">
          <UserData />
        </div>
      </>
    );
  }
}

export default About;
