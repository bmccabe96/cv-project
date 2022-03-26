import React, { Component } from "react";

class About extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
      //editMode: this.props.editMode,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  render() {
    const { editMode } = this.props;
    if (editMode) {
      return (
        <div>
          <div className="cv-section">About</div>
          <div>
            <textarea
              value={this.state.text}
              onChange={this.handleChange}>
            </textarea>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="cv-section">
          <div className="cv-section-name">About</div>
          <div>
            <div>{this.state.text}</div>
          </div>
        </div>
      )
    }
  }
}

export default About;