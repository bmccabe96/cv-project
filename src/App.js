import React, { Component } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import ExperienceList from "./components/ExperienceList";
import Education from "./components/Education";
import Footer from "./components/Footer";
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
        <div>
          <Header />
          <div className="edit-btn-container">
            <button className="edit-btn" onClick={this.changeMode}>{!this.state.editMode ? "Edit" : "Preview"}</button>
            <button className={(this.state.editMode ? "hidden" : "visible") + " print-btn"}>Print</button>
          </div>
        </div>
        <div className="cv-content">
          <Profile editMode={this.state.editMode} />
          <About editMode={this.state.editMode} />
          <ExperienceList editMode={this.state.editMode} />
          <Education editMode={this.state.editMode} />
        </div>
        <Footer />
      </div>
    )
  }
}


export default App;
