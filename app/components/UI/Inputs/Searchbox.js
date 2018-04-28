import React from 'react'
import {View,TextInput,Text,TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import Input from './Input';

const Wrapper = styled.View`
  position: relative;
  padding: 3px;
  background: #455A64;
  height: 50px;
  elevation:2;
`;

const Textbox = styled.TextInput`
  padding: 8px 15px;
  padding-right: 50px;
  padding-left:30px;
  background: white;
  border: 1px solid #9E9E9E;
  margin: 2px;
  border-radius: 4px;
`;

const QRScan = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
`;

const Icon = styled.View`
  position: absolute;
  left: 10px;
`;

const SearchBox = props => {
  return(
    <Wrapper>
      
      <Textbox 
        {...props} 
        underlineColorAndroid='transparent'
        onChangeText = {(val)=>props._onChange(val)} />
      <Icon>
        <Text>SE</Text>
      </Icon>
      <QRScan>
        <Text>QRS</Text>
      </QRScan>
    </Wrapper>
  )
}

export default SearchBox;