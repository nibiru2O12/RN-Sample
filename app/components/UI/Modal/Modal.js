import React from 'react'
import styled from 'styled-components';
import {View,Text,TouchableHighlight} from 'react-native';

const Wrapper = styled.View`
  width:250px;
  height:250px;
  background:red;
`;


const Modal = props => {

  const modal = props.show && (
      <Wrapper>
        <Text>Modal</Text>
        <TouchableHighlight onPress={props._onConfirm}>
          <Text>Yes</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={props._onCancel}>
          <Text>No</Text>
        </TouchableHighlight>
      </Wrapper>
  )

  return(
    modal
  )

}

export default Modal;