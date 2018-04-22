import React, { Component } from 'react';

import {View,Text} from 'react-native';

class MedicalHx extends Component {

  static navigationOptions = ({navigation}) => {
    return  (
        {
            title  : 'Med. Hx'
        }
    )
  }

  render(){
    return(
      <View>
        <Text>MedicalHx Exam</Text>
      </View>
    )
  }
}

export default MedicalHx;