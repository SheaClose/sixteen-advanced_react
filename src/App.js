import React, { Component } from "react";
import logo from "./logo.svg";
import Child from "./Child";
import "./App.css";
import WithMouse from "./WithMouse";
import WithPeoples from "./WithPeoples";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <WithPeoples>
          {({ people }) => {
            return (
              <Child
                object={{ name: "Shea", age: 35 }}
                number={3}
                string={"This is a string"}
                people={people}
              />
            );
          }}
        </WithPeoples>
        {/* <WithMouse
          render={props => {
            console.log("props: ", props);
            return (
              <div onMouseMove={props.move} style={props.style}>
                WithMouse
              </div>
            );
          }}
        /> */}
      </div>
    );
  }
}

export default App;
