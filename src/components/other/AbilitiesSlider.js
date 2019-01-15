import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class AbilitiesSlider extends Component {
  constructor() {
    super();
    this.state = {
      slides: []
    }
  }

  componentWillMount() {
    this.setState({slides: this.props.slideEntries});
  }

  render() {
    return (
      <div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={55}
          totalSlides={3}
          orientation={'vertical'}
          touchEnabled={false}
          dragEnabled={false}
          isPlaying={true}
          lockOnWindowScroll={true}
          interval={this.props.slideInterval}
        >
          <Slider
            classNameAnimation={'slider-anim'}
          >
            <Slide index={0}>
              <img src={this.state.slides[0]} alt="#"/>
            </Slide>

            <Slide index={1}>
              <img src={this.state.slides[1]} alt="#"/>
            </Slide>

            <Slide index={2}>
              <img src={this.state.slides[2]} alt="#"/>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    );
  }
}

export default AbilitiesSlider;

/*
Old Abilities component

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
          <Link to="/work" className="button round anim-arrow-colour hover-text-red bold">Explore my work <span className="material-icons vert-align">keyboard_arrow_right</span></Link>
        </div>
      </div>
    );
  }
}
*/
