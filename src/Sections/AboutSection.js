import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import './AboutSection.css'

class AboutSection extends Component {
  render() {
    return (
      <Fullpage className="second second-tow">
        <h3> {data.Sections[0].title} </h3>
        <div className="paragraphs">
            {data.Sections[0].item.map((item,index)=><p key={index}>{item.content}</p>)}
        </div>
      </Fullpage>
    );
  }
}

export default AboutSection;


