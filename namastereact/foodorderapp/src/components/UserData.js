import React from "react";
class UserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy Location",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({ userInfo: json });
  }
  componentDidUpdate() {
    console.log("compoent is updated");
  }
  componentWillUnmount() {
    console.log("component is unmounted");
  }
  render() {
    const { name, location, twitter_username } = this.state.userInfo;
    return (
      <div className="user-card">
        <h3 className="user-name">{name}</h3>
        <div className="user-location">{location}</div>
        <div className="user-contact">{twitter_username}</div>
      </div>
    );
  }
}
export default UserData;
