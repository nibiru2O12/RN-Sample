import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'

import Home from './components/Home/Home';
import Nurse from './components/modules/Nurse';
import NurseInfo from './components/modules/Nurse/Information/NurseInfo';
import PatientRecords from './components/Patients/PatientRecords';
import BarcodeScanner from './components/BarcodeScanner';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header : {
    backgroundColor:"#263238",
  }
});

const RootStackNavigator = StackNavigator({
  Home: {screen:Home},
  Nurse: {screen: Nurse},
  NurseInfo:{screen:NurseInfo},
  PatientRecords: {screen:PatientRecords},
  Barcode : {screen:BarcodeScanner}
},{
  initialRouteName: "Home",
  navigationOptions: {
    headerStyle: styles.header,
    headerTintColor: "#FAFAFA"
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RootStackNavigator />
      </View>
    );
  }
}

