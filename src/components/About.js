import React, { Component } from "react";

class About extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: '',
      editMode: this.props.editMode,
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
          <h2 className="cv-section">About</h2>
          <textarea 
            value={this.state.text}
            onChange={this.handleChange}>
          </textarea>
        </div>
      );
    }
    else {
      return (
        <div>
          <h2 className="cv-section">About</h2>
          <p>{this.state.text}</p>
        </div>
      )
    }
  }
}

export default About;