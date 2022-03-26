import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import "./styles/app.css"


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
    };

    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(e) {
    if (e.target.innerHTML === 'Save') {
      this.setState({
        editMode: false,
      });
    }
    else {
      this.setState({
        editMode: true,
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.changeMode}>{!this.state.editMode ? "Edit" : "Save"}</button>
        <About editMode={this.state.editMode} />
      </div>
    )
  }
}


export default App;
