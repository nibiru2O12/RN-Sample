import React, { Component } from 'react';

import {View,Text} from 'react-native';

class FamilyHx extends Component {

  static navigationOptions = ({navigation}) => {
    return  (
        {
            title  : 'Family Hx'
        }
    )
  }

  render(){
    return(
      <View>
        <Text>FamilyHx Exam</Text>
      </View>
    )
  }
}

export default FamilyHx;