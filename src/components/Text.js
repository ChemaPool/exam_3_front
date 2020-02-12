import React from 'react';
import Styled from 'styled-components';

const Title = Styled.div`
  width: 150px;
  height: 80px;
  font-weight: bold;
  position: absolute;
  text-transform: uppercase;
  top: ${props => props.top};
  left: ${props => props.left};
  font-size: ${props => props.fontSize};
  z-index: ${props => props.zIndex || '1'};
  color: ${props => props.color || '#000'};
  transform: ${props => props.transform || 'none'};
`;

const Text = (props) => {
  return (
    <Title
      top={props.top}
      left={props.left}
      color={props.color}
      zIndex={props.zIndex}
      fontSize={props.fontSize}
      transform={props.transform}>
      {props.text}
    </Title>
  );
}

export default Text;