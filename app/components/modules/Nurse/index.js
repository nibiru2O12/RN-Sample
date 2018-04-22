import React, { Component } from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {StackNavigator} from 'react-navigation';

import PatientList from '../../Patients/PatientList';
import PatientRecords from '../../Patients/PatientRecords';
import NurseInfo from './Information/NurseInfo';

const mock_records = [
  {
    controlNo:"001-20019",
    dateadded:"09-09-2019"
  },
  {
    controlNo:"002-20019",
    dateadded:"19-09-2019"
  }
];

class Nurse extends Component {
 
  static navigationOptions = ({navigation}) => {
    return  (
        {
            title  : 'Nurse Section'
        }
    )
  }

  state = {
    patientRecords : [],
    selectedPatient: null
  }

  _selectPatient = patient => {
    const {navigate} = this.props.navigation
    navigate("PatientRecords",{patient:patient,section:"nurse",onSelectRecord:()=>alert("Record Selected")})
  }

  render(){
    const {selectedPatient} = this.state
    return (
      <View style={styles.container}>
        <PatientList 
          _onPress = {this._selectPatient} />
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
  }
});

export default Nurse;