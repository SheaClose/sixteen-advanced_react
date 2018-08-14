import React, { Component } from "react";
import PropTypes from "prop-types";
import withPeople from "./withPeople";

class Child extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Hello from child!
        <div>{this.props.number}</div>
        {this.props.object.name}
        {this.props.people.map(c => (
          <div>{c}</div>
        ))}
      </div>
    );
  }
}

Child.propTypes = {
  number: PropTypes.number,
  string: PropTypes.string.isRequired,
  object: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  })
};

export default Child;
// export default withRouter(connect(s=>s)(Child))
