import React, { Component } from "react";
import uniqid from "uniqid";



class ExperienceList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experienceList: [{
        company: 'Company',
        from: '',
        to: '',
        position: 'Position',
        description: 'Description',
        id: uniqid(),
      }],
    }
    
  }

  handleCompanyChange = (e) => {
    const id = e.target.dataset.id;
    this.setState({
      experienceList: this.state.experienceList.map(item => {
        if(item.id === id) {
          item.company = e.target.value;
        }
        return item;
      })
    });
  }

  handleFromChange = (e) => {
    const id = e.target.dataset.id;
    this.setState({
      experienceList: this.state.experienceList.map(item => {
        if(item.id === id) {
          item.from = e.target.value;
        }
        return item;
      })
    });
  }

  handlePositionChange = (e) => {
    const id = e.target.dataset.id;
    this.setState({
      experienceList: this.state.experienceList.map(item => {
        if(item.id === id) {
          item.position = e.target.value;
        }
        return item;
      })
    });
  }

  handleToChange = (e) => {
    const id = e.target.dataset.id;
    this.setState({
      experienceList: this.state.experienceList.map(item => {
        if(item.id === id) {
          item.to = e.target.value;
        }
        return item;
      })
    });
  }

  handleDescriptionChange = (e) => {
    const id = e.target.dataset.id;
    this.setState({
      experienceList: this.state.experienceList.map(item => {
        if(item.id === id) {
          item.description = e.target.value;
        }
        return item;
      })
    });
  }

  addExperience = () => {
    this.setState({
      experienceList: this.state.experienceList.concat({
        company: 'Company',
        from: '',
        to: '',
        position: 'Position',
        description: 'Description',
        id: uniqid(),
      })
    });
  }

  removeExperience = (e) => {
    const id = e.target.dataset.id;
    const newList = this.state.experienceList.filter(item => {
      if(item.id !== id) {
        return item;
      }
    })
    this.setState({
      experienceList: newList,
    })
  }

  render() {
    const { editMode } = this.props;
    const { experienceList } = this.state;
    if (editMode) {
      return (
        <div className="cv-experience-section">
          <div className="cv-section-name">Experience</div>
          <div className="experience-list">
            {experienceList.map((experience, index) => {
              return (
                <div className="experience-item" key={experience.id}>
                  <div className="experience-row">
                    <input
                      type="text"
                      id="company-input"
                      data-id={experience.id}
                      onChange={this.handleCompanyChange}
                      value={experience.company}
                    />
                    <input
                      type="date"
                      id="from-input"
                      data-id={experience.id}
                      onChange={this.handleFromChange}
                      value={experience.from}
                    />
                  </div>
                  <div className="experience-row">
                    <input
                      type="text"
                      id="position-input"
                      data-id={experience.id}
                      onChange={this.handlePositionChange}
                      value={experience.position}
                    />
                    <input
                      type="date"
                      id="to-input"
                      data-id={experience.id}
                      onChange={this.handleToChange}
                      value={experience.to}
                    />
                  </div>
                  <div className="experience-row">
                    <textarea
                      data-id={experience.id}
                      value={experience.description}
                      onChange={this.handleDescriptionChange}>
                    </textarea>
                  </div>
                  <div className="remove-experience">
                    <button className="remove-experience-btn" data-id={experience.id} onClick={this.removeExperience}>Remove Experience</button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="add-experience">
            <button onClick={this.addExperience}>Add Experience</button>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="cv-experience-section">
          <div className="cv-section-name">Experience</div>
          <div className="experience-list">
            {experienceList.map((experience, index) => {
              return (
                <div className="experience-item" key={experience.id}>
                  <div className="experience-row">
                    <div>{experience.company}</div>
                    <div className="col-2">From: {experience.from}</div>
                  </div>
                  <div className="experience-row">
                    <div>{experience.position}</div>
                    <div className="col-2">To: {experience.to}</div>
                  </div>
                  <div className="experience-row">
                    <div>{experience.description}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
  }
}

export default ExperienceList;