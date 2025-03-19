import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    console.log(props.name);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}>
          increase
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {this.props.Location}</h3>
        <h4>Contact : </h4>
      </div>
    );
  }
}

export default User;
