import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Profile from "./components/Profile";
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
    if (e.target.innerHTML === 'Preview') {
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
        <button onClick={this.changeMode}>{!this.state.editMode ? "Edit" : "Preview"}</button>
        <div className="cv-content">
          <Profile editMode={this.state.editMode} />
          <About editMode={this.state.editMode} />
        </div>
      </div>
    )
  }
}


export default App;
