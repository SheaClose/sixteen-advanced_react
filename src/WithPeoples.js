import React, { Component } from "react";
//import './RenderPropWithPeople.css';
import axios from "axios";
class RenderPropWithPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(({ data }) => {
      this.setState({ people: data.results.map(c => c.name) });
    });
  }

  render() {
    return <div className="">{this.props.children(this.state)}</div>;
  }
}
export default RenderPropWithPeople;
