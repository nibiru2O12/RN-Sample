import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,} from 'react-native';

import Card from '../UI/Cards/Card';

class Home extends Component {
  render() {
    const {navigation} = this.props;
    return(
      <View style={styles.container}>
         <Card 
          header="Nurse Section" 
          description="View / Recording patient's physical examinations"
          location="Nurse"
          navigate={navigation.navigate} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
      flex : 1,
      display : "flex",
      flexDirection: 'column',
      backgroundColor : "#f4f3ed",
      justifyContent : "flex-start",
      padding : 10
  }
});


export default Home