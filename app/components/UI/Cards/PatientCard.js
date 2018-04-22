import React from 'react'
import styled from 'styled-components';
import {Stylesheet,View,Text,Image} from 'react-native';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding: 8px;
`;

const TextWrapper = styled.View`
  display:flex;
  flex-direction: row;
`;

const Label = styled.Text`
  color: #424242;
  font-size: 13px;
`;
const TextData = styled.Text`
  margin:auto 5px;
  font-weight: bold;
  font-size: 14px;
`;

const PatientCard = props => {
  
  const {controlNo,name,age,gender} = props;

  return(
    <Wrapper>
      <View style={{flex:1,justifyContent:"space-around"}}>
        <TextWrapper>
          <Label>Control #: </Label>
          <TextData>{controlNo}</TextData>
        </TextWrapper>
        <TextWrapper>
          <Label>Name: </Label>
          <TextData>{name}</TextData>
        </TextWrapper>
        <TextWrapper>
          <Label>Gender: </Label>
          <TextData>{gender}</TextData>
          <Label>Age: </Label>
          <TextData>{age}</TextData>
        </TextWrapper>
      </View>
      <Image
        style={{width: 80, height: 80}}
        source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
      />
    </Wrapper>
  )
}

export default PatientCard;