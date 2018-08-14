import React, { Component } from "react";

export default class WithMouse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
    };
    this.onMouseMove = this.onMouseMove.bind(this);
  }

  onMouseMove(e) {
    this.setState({ x: e.pageX });
  }

  render() {
    return (
      <div>
        {this.props.render({
          style: { background: `hsl(${this.state.x}, 100%, 50%)` },
          move: this.onMouseMove
        })}
      </div>
    );
  }
}
