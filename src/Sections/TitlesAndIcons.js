import React, { Component } from "react";
import Fullpage from "../components/Fullpage";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import DownIcon from "../components/DownIcon";
import { Link, Element } from "react-scroll";

export default class TitlesAndIcons extends Component {
  state = { 
    color: "white",
    className: 'first'
   };

  changeColor = () => {
    this.setState({
      color: this.state.color === "white" ? "yellow" : "white"
    });
  };

  changeMenu = () => {
    this.setState({
      color: this.state.color === "white" ? "red" : "white"
    });
  };

  changebutton = () => {
    this.setState({
      className: this.state.className === "first" ? "second" : "first"
    });
  };

  render() {
    return (
      <div>
        <Fullpage className={this.state.className}>
          <button
            className="color"
            onClick={this.changebutton}
          >
            {data.button}
          </button>

          <h5
            className="menu"
            style={{
              color: this.state.color
            }}
            onMouseOver={this.changeColor}
            onMouseLeave={() => {
              this.changeColor();
            }}
          >
            {data.manu}
          </h5>

          <h1
            className="title"
            style={{
              color: this.state.color
            }}
            onMouseOver={this.changeMenu}
            onMouseLeave={() => {
              this.changeMenu();
            }}
          >
            {data.title}
          </h1>
          <div>
            <h2> {data.Subtitle} </h2>
          </div>
          <div className="icon-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icon" key={key}>
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>

        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={1000}
        />

        <DownIcon
          icon={data.icons.down}
          onClick={() => console.log("im working")}
        />
        <Element name="about" className="element" />
      </div>
    );
  }
}
