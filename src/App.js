import React, { Component } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import ExperienceList from "./components/ExperienceList";
import Education from "./components/Education";
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
      <div className="all-content">
        <Header />
        <div className="edit-btn-container">
          <button className="edit-btn" onClick={this.changeMode}>{!this.state.editMode ? "Edit" : "Preview"}</button>
        </div>
        <div className="cv-content">
          <Profile editMode={this.state.editMode} />
          <About editMode={this.state.editMode} />
          <ExperienceList editMode={this.state.editMode} />
          <Education editMode={this.state.editMode} />
        </div>
      </div>
    )
  }
}


export default App;
