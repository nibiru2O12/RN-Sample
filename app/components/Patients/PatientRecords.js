import React,{Component} from 'react';
import {View,Text,TouchableOpacity,BackHandler,StyleSheet,Alert} from 'react-native';
import Modal from '../UI/Modal/Modal';
import styled from 'styled-components';
import FloatingButton from '../UI/FloatingButton/FloatingButton';
import RecordCard from '../UI/Cards/RecordCard';



const mock_data = [
  {
    controlNo:"009-20012",
    name:"rj",
    age:"32",
    gender:"male"
  }
]


const HeaderButton = styled.TouchableOpacity`
  border: 1px solid black;
  padding : 5px 8px;
`;


class PatientRecords extends Component{

  static navigationOptions = ({navigation}) => {

    const {params} = navigation.state;
    
    return  (
        {
            headerTitle  : 'Existing Records'
        }
    )
  }

  state = {
    latestHasRecord : false
  }

  _goBack = () => {

    Alert.alert(
      "BACK",
      "Leave current page?",
      [
        {
          text:"Yes",onPress:()=>this.props.navigation.goBack()
        },
        {
          text:"Cancel",onPress:()=>console.log('Cancelled')
        }
      ]
    )

    return true

  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this._goBack);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwa reBackPress');
  }

  render (){

    const {patient} = this.props.navigation.state.params;

    const noRecord = !patient && (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={styles.noRecord} icon="+">No Existing / Previous Record</Text>
      </View>
    )

    let latestHasRecord = false;
    const records = mock_data.map((record,i)=>{

      if(record.controlNo === patient.controlNo){
        latestHasRecord = true
      }

      return (
        
        <TouchableOpacity key={i}>
          <RecordCard
            controlNo={record.controlNo}
            name={record.name}/>
        </TouchableOpacity>
      )
    });

    if(latestHasRecord){
      console.log('update only')
    }else{
      console.log('adding is enabled')
    }

    return(
      <View style={styles.container}>
        {noRecord}        
        <FloatingButton 
          icon={<Text>+</Text>}
          onPress = {()=>this.props.navigation.navigate('NurseInfo',{patient:patient,record:null})} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  noRecord:{
    fontSize: 16,
  }
});

export default PatientRecords;