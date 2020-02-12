import React from 'react';
import Styled from 'styled-components';

const Circle = Styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.color};
  left: ${props => props.left || 'none'};
  margin-top: ${props => props.marginTop};
  float: ${props => props.float || 'none'};
  z-index: ${props => props.zIndex || 'none'};
  transform: ${props => props.transform || 'none'};
  box-shadow: ${props => props.boxShadow || 'none'};
  position: ${props => props.position || 'relative'};
  border-radius: ${props => props.borderRadius || '50%'};
`;

const Figure = (props) => {
  return (
    <Circle
      left={props.left}
      width={props.width}
      color={props.color}
      float={props.float}
      zIndex={props.zIndex}
      height={props.height}
      position={props.position}
      marginTop={props.marginTop}
      transform={props.transform}
      boxShadow={props.boxShadow}
      borderRadius={props.borderRadius} />
  );
}

export default Figure;