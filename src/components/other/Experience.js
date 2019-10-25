import React, { Component } from 'react';

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false}
  }

  toggle() {
    this.setState({show: !this.state.show});
  }

  render() {
    let text;
    if (this.props.exp === "Design") {
      text = <p>I have experience with <span className="text-red bold">UI/UX, graphic- and interactiondesign</span> and am fairly comfortable working in <span className="text-red bold">Photoshop, Illustrator and InDesign.</span></p>;
    }
    else {
      text = <p>I have experience with <span className="text-red bold">HTML, CSS, JavaScript, React, Java, Processing and Arduino.</span> For version control and management I have experience with <span className="text-red bold">Git, Github and Trello.</span></p>;
    }

    return (
      <div className="dropdown-click">
        <button className="button round anim-arrow-colour hover-text-red bold" onClick={this.toggle.bind(this)}>{this.props.exp} experience<span className="material-icons vert-align">{this.state.show ? "keyboard_arrow_down" : "keyboard_arrow_right"}</span></button>
        <div className={this.state.show ? "dropdown-content anim-fadeInDown show" : "dropdown-content anim-fadeInDown"}>
          {text}
        </div>
      </div>
    );
  }
}

export default Experience;
