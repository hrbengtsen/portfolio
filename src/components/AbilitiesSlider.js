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
