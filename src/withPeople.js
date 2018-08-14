import React, { Component } from "react";

const withPeople = Comp =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        people: ["Shea", "Steven", "Jarrid", "Joe"]
      };
    }

    render() {
      return <Comp {...this.props} {...this.state} />;
    }
  };

export default withPeople;
