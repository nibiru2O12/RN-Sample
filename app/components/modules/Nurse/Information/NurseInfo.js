import React,{Component} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in

import Physical from './Physical';
import FamilyHx from './Family';
import MedicalHistory from './MedicalHistory';
import FloatingBtn from '../../../UI/FloatingButton/FloatingButton';
import PatientCard from '../../../UI/Cards/PatientCard';

const TabNav = TabNavigator(
  {
    Physical : {
      screen : Physical
    },
    FamilyHx : {
      screen : FamilyHx
    },
    MedicalHistory : {
      screen : MedicalHistory
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#FAFAFA',
      inactiveTintColor: '#B0BEC5',
      style: {
        backgroundColor:"#455A64"
      }
    },
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,
    lazy:true,
  }
);

class NurseInfo extends Component {

  static navigationOptions = ({navigation}) => {
    return  (
        {
            title  : 'Patient Examination'
        }
    )
  }

  state = {
    savetype : "show"
  }

  __add = props => {
    alert('Mode: Add')
    this.setState({savetype:"add"})
  }

  __save = props => {
    alert('Mode: Show')
    this.setState({savetype : "show"})
  }

  render() {

    const {savetype} = this.state;
    const {patient} = this.props.navigation.state.params;
    
    return (
      <View style={styles.container}>
        <PatientCard
          controlNo={patient.controlNo}
          name={patient.name}
          age={patient.age}
          gender={patient.gender}
           />
        <TabNav />
      </View>
    )
  };
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

export default NurseInfo;