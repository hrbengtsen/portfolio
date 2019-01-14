import React, { Component } from 'react';
import AbilitiesSlider from './AbilitiesSlider';
import designSlide1 from '../../img/design-slide1.svg';
import designSlide2 from '../../img/design-slide2.svg';
import designSlide3 from '../../img/design-slide3.svg';

class Abilities extends Component {
  constructor() {
    super();
    this.state = {
      designSlides: [
        designSlide1,
        designSlide2,
        designSlide3
      ],
      developSlides: [
        designSlide1,
        designSlide2,
        designSlide3
      ]
    }
  }

  render() {
    let time = 8000;

    return (
      <div className="content section text-for-row">
        <h3 className="text-red center margin-bottom">What I can do.</h3>
        <div className="row-padding margin-bottom">
          <div className="col s12 m7 l7">
            <h4>Design what matters.</h4>
            <p>I like to design with simplicity as the primary focus.
            My goals are to create something that engages the target audience and effectively conveys the desired message.</p>
          </div>
          <div className="col s12 m5 l5 hid">
            <AbilitiesSlider slideEntries={this.state.designSlides} slideInterval={time} />
          </div>
        </div>

        <div className="row-padding">
          <div className="col s12 m5 l5 hid">
            <AbilitiesSlider slideEntries={this.state.developSlides} slideInterval={time} />
          </div>
          <div className="col s12 m7 l7">
            <h4>Develop what's needed.</h4>
            <p>I develop the required features and ensure quality across multiple devices,
            without any clutter - all using the latest technologies available.</p>
          </div>
        </div>

        <div className="center section-top">
          <a href="#" className="button round anim-arrow-colour hover-text-red bold">Explore my work <span className="material-icons vert-align">keyboard_arrow_right</span></a>
        </div>
      </div>
    );
  }
}

export default Abilities;