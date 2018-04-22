import React from 'react'
import styled from 'styled-components';
import {Text} from 'react-native';


const Label = props => {
  return(
    <Text>asd{props.text}</Text>
  )
}

export default styled.Text`
  color: #4CAF50;
  font-size: 14px;
`;