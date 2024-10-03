import React from 'react';
import styled from 'styled-components';

const ImageSectionWrapper = styled.div`
  width: 100%;
  height: 1200px;
  background: url('https://via.placeholder.com/1800x1200') no-repeat center center;
  background-size: cover;
  z-index: 999;
  position: relative;
`;

const ImageSection = () => (
  <ImageSectionWrapper id="imagesection" >
  </ImageSectionWrapper>
);

export default ImageSection;
