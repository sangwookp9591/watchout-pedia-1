import React from 'react';
import ReactSlider, { Settings } from 'react-slick';

interface Props {
  settings?: Settings;
}

const DEFAULT_SETTINGS: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
};

const Slider: React.FC<Props> = ({ settings = DEFAULT_SETTINGS, children }) => (
  <ReactSlider {...settings}>
    {children}
  </ReactSlider>
)

export default Slider;
