import React from 'react'
import {View,TextInput,Text} from 'react-native';
import styled from 'styled-components';


const Textbox = styled.TextInput`
  padding: 8px 15px;
  padding-right: 50px;
  background: white;
  border: 1px solid black;
  margin: 5px;
  border-radius: 4px;
`;


const SearchBox = props => {
  return(
    <Textbox 
      {...props} 
      underlineColorAndroid='transparent'
      onChangeText = {(val)=>props._onChange(val)} />
  )
}

export default SearchBox;