import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      educationList: [{
        institution: 'Institution',
        degree: 'Degree',
        subject: 'Subject',
        graduation: '',
        id: uniqid(),
      }]
    }
  }

handleInstitutionChange = (e) => {
  const id = e.target.dataset.id;
  this.setState({
    educationList: this.state.educationList.map(item => {
      if(item.id === id) {
        item.institution = e.target.value;
      }
      return item;
    })
  });
}

handleDegreeChange = (e) => {
  const id = e.target.dataset.id;
  this.setState({
    educationList: this.state.educationList.map(item => {
      if(item.id === id) {
        item.degree = e.target.value;
      }
      return item;
    })
  });
}

handleSubjectChange = (e) => {
  const id = e.target.dataset.id;
  this.setState({
    educationList: this.state.educationList.map(item => {
      if(item.id === id) {
        item.subject = e.target.value;
      }
      return item;
    })
  });
}

handleGraduationChange = (e) => {
  const id = e.target.dataset.id;
  this.setState({
    educationList: this.state.educationList.map(item => {
      if(item.id === id) {
        item.graduation = e.target.value;
      }
      return item;
    })
  });
}

addEducation = () => {
  this.setState({
    educationList: this.state.educationList.concat({
      institution: 'Institution',
      degree: 'Degree',
      subject: 'Subject',
      graduation: '',
      id: uniqid(),
    })
  });
}

removeEducation = (e) => {
  const id = e.target.dataset.id;
  const newList = this.state.educationList.filter(item => {
    if(item.id !== id) {
      return item;
    }
  })
  this.setState({
    educationList: newList,
  })
}

  render() {
    const { editMode } = this.props;
    const { educationList } = this.state;

    if (editMode) {
      return (
        <div className="cv-education-section">
          <div className="cv-section-name">Education</div>
          <div className="education-list">
            {educationList.map((education, index) => {
              return (
                <div>
                  <div className="education-item" key={education.id}>
                    <input
                      type="text"
                      id="institution-input"
                      data-id={education.id}
                      onChange={this.handleInstitutionChange}
                      value={education.institution}
                    />
                    <input
                      type="text"
                      id="degree-input"
                      data-id={education.id}
                      onChange={this.handleDegreeChange}
                      value={education.degree}
                    />
                    <input
                      type="text"
                      id="subject-input"
                      data-id={education.id}
                      onChange={this.handleSubjectChange}
                      value={education.subject}
                    />
                    <input
                      type="date"
                      id="graduation-input"
                      data-id={education.id}
                      onChange={this.handleGraduationChange}
                      value={education.graduation}
                    />
                  </div>
                  <div className="remove-education">
                    <button className="remove-education-btn" data-id={education.id} onClick={this.removeEducation}>Remove Education</button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="add-education">
            <button onClick={this.addEducation}>Add Education</button>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="cv-education-section">
          <div className="cv-section-name">Education</div>
          <div className="education-list">
            {educationList.map((education, index) => {
              return (
                <div className="education-item" key={education.id}>
                  <div>{education.institution}</div>
                  <div>{education.degree}</div>
                  <div>{education.subject}</div>
                  <div className="education-graduation">{education.graduation}</div>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
  }
}

export default Education;

