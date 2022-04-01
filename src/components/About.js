import React, { useState } from "react";

const About = (props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const { editMode } = props;
    if (editMode) {
      return (
        <div>
          <div className="cv-section-name">About</div>
          <div>
            <textarea
              value={text}
              onChange={handleChange}>
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
            <div>{text}</div>
          </div>
        </div>
      )
    }
}



export default About;