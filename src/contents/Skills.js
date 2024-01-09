import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myskills: [
        "Microsoft Office",
        "Visual Studio Code",
        "Figma",
        "Canva",
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
      ],
    };
  }

  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
          {this.state.myskills.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Skills;
