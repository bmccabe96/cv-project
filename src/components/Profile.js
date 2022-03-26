import React, { Component } from "react";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Enter name',
      city: 'Enter city',
      email: 'Enter email',
      phone: 'Enter phone',
    }
  
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }
  handleCityChange = (e) => {
    this.setState({
      city: e.target.value
    });
  }
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value
    });
  }

  render() {
    const { editMode } = this.props;
    const { name, city, email, phone } = this.state;

    if (editMode) {
      return (
        <div className="cv-profile-section">
          <input 
            className="cv-name"
            type="text" 
            id="name-input"
            onChange={this.handleNameChange}
            value={name}
          />
          <div className="cv-profile-details">
            <input 
              type="text" 
              id="city-input"
              onChange={this.handleCityChange}
              value={city}
            />
            <input 
              type="text" 
              id="email-input"
              onChange={this.handleEmailChange}
              value={email}
            />
            <input 
              type="text" 
              id="phone-input"
              onChange={this.handlePhoneChange}
              value={phone}
            />
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="cv-profile-section">
          <div className="cv-name">{name}</div>
          <div className="cv-profile-details">
            <div>{city}</div>
            <div>{email}</div>
            <div>{phone}</div>
          </div>
        </div>
      );
    }
  }
}

export default Profile;