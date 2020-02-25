import React from 'react';
import Styled from 'styled-components';
import Text from './Text';
import Figure from './Figure';
import Eyes from '../images/eye.jpg';
import Lips from '../images/lips.jpg';
import NoiseBackgroundImg from '../images/noise.png';
import BackgroundImage from '../images/background.png';

const Container = Styled.div`
  width: 600px;
  height: 900px;
  overflow: hidden;
  margin: 40px auto;
  background: linear-gradient(to bottom,
  rgba(242,199,7,1) 0%, rgba(231,56,39,1) 0%,
  rgba(231,56,39,1) 70%, rgba(242,199,7,1) 95%, rgba(242,199,7,1) 100%);
`;

const ContainerImage = Styled.img`
  z-index: 2;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: ${props => props.width};
  box-shadow: ${props => props.boxShadow || 'none'};
`;

const ContainerNoise = Styled.div`
  z-index: 3;
  opacity: .6;
  width: 600px;
  height: 900px;
  position: absolute;
  background-image: url(${NoiseBackgroundImg});
`;

const BodyPage = Styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 980px;
  filter: blur(10px);
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 25% 20%;
  background-image: url(${BackgroundImage});
`;

const MainContainer = () => {
  return (
    <Container>
      <BodyPage />
      <ContainerNoise />
      <Text
        zIndex="3"
        top="80px"
        left="600px"
        fontSize="70px"
        color="#f2c707"
        transform="skewY(10deg)"
        text="The Vanishing Futurist" />
      <Text
        zIndex="2"
        top="780px"
        left="640px"
        fontSize="46px"
        text="Charlotte Hobson" />
      <Figure
        width="30px"
        height="30px"
        left="1000px"
        color="#f2c707"
        marginTop="50px"
        position="absolute" />
      <Figure
        left="555px"
        width="20px"
        height="20px"
        color="#f2c707"
        marginTop="630px"
        position="absolute" />
      <Figure
        zIndex="2"
        width="10px"
        height="10px"
        left="1030px"
        color="#f2c707"
        marginTop="830px"
        position="absolute" />
      <Figure
        zIndex="1"
        width="600px"
        color="#000"
        height="600px"
        marginTop="50px" />
      <Figure
        zIndex="1"
        width="600px"
        height="600px"
        color="#127498"
        marginTop="-1200px" />
      <Figure
        zIndex="1"
        left="25px"
        width="230px"
        float="right"
        height="300px"
        color="#095e09"
        marginTop="650px"
        borderRadius="0 100% 0 0" />
      <Figure
        zIndex="1"
        left="-25px"
        width="230px"
        height="300px"
        color="#127498"
        marginTop="650px"
        transform="scaleX(-1)"
        borderRadius="0 100% 0 0" />
      <Figure
        zIndex="2"
        left="100px"
        width="400px"
        height="550px"
        marginTop="-832px"
        boxShadow="-10px 10px 10px -3px rgba(0,0,0,0.75)"
        color="linear-gradient(to right,
          rgba(239,224,183,1) 0%, rgba(239,224,183,1) 50%,
          rgba(240,47,23,1) 52%, rgba(240,47,23,1) 53%,
          rgba(246,41,12,1) 59%, rgba(242,199,7,1) 100%)"
        borderRadius="50% 50% 50% 50% / 40% 40% 60% 60%" />
      <Figure
        zIndex="2"
        left="106px"
        color="#000"
        width="450px"
        height="200px"
        borderRadius="0"
        marginTop="-560px"
        transform="skewY(10deg)" />
      <Figure
        zIndex="2"
        left="160px"
        width="80px"
        height="40px"
        marginTop="100px"
        borderRadius="0 50% / 0 100%" />
      <Figure
        width="300px"
        height="380px"
        color="#095e09"
        borderRadius="0"
        marginTop="-540px" />
      <Figure
        left="300px"
        width="300px"
        height="650px"
        color="#127498"
        marginTop="0px"
        borderRadius="0" />
      <Figure
        width="300px"
        height="280px"
        borderRadius="0"
        marginTop="-280px"
        color="repeating-linear-gradient(0deg, #d04a0d, #d04a0d 5px, #f2c707 5px, #f2c707 10px)" />
      <Figure
        zIndex="1"
        left="150px"
        width="150px"
        height="500px"
        color="#efe0b7"
        borderRadius="0"
        marginTop="-500px" />
      <Figure
        zIndex="1"
        left="300px"
        width="150px"
        height="500px"
        color="#095e09"
        borderRadius="0"
        marginTop="-500px"
        boxShadow="2px 0px 10px 0px rgba(0,0,0,0.75)" />
      <Figure
        zIndex="1"
        left="300px"
        width="200px"
        height="200px"
        color="#095e09"
        borderRadius="0"
        marginTop="-225px" />
      <ContainerImage
        src={Eyes}
        top="400px"
        left="627px"
        width="170px"
        boxShadow="-30px 0px 97px -31px rgba(0,0,0,0.75)" />
      <ContainerImage
        src={Lips}
        top="609px"
        width="85px"
        left="713px" />
    </Container>
  );
}

export default MainContainer;