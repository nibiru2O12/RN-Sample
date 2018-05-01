import React, { Component } from 'react'
import {connect} from 'react-redux';
import {ScrollView,FlatList,Button,View,Text,TextInput,Stylesheet,TouchableOpacity} from 'react-native';
import PatientCard from '../UI/Cards/PatientCard';
import Searchbox from '../UI/Inputs/Searchbox';
import BarcodeScanner from '../BarcodeScanner';
import * as action from '../../store/actions/actions';

class PatientList extends Component{


  state = {
    searchString:"",
    scan:false,
  }

  _onChange = value => {

    this.setState({scan:false,searchString:value})
    const patients = [...this.state.patients].filter(patient=>patient.name.includes(value));
    // this.setState({patients})
  }

  _search = ({data}) => {
    this.setState({scan:false,searchString:data})
  }

  componentDidMount(){
    this.props._searchPatient("gagui");
  }


  render(){
    console.log(this.props)
    const {patients} = this.props;
    // const patients = [...this.state.patients].filter(patient=>(
    //   patient.controlNo.includes(this.state.searchString) || patient.name.includes(this.state.searchString) 
    // ));
 
    return(
      <View style={{flex:1}}>
       {/* <Button title="Scan" onPress={()=>this.setState({scan:true})} />
        {
          this.state.scan &&
          <BarcodeScanner _search={this._search} />
        } */}
        <Searchbox 
          placeholder="Search Patient Name / Control No."
          _onChange={this._onChange} />
        <ScrollView>
         {/* {patients} */}
         <FlatList
            data={patients}
            renderItem={({item}) => {
              return(
                <TouchableOpacity
                  key={item.controlNo}
                  onPress={()=>this.props._onPress(item)}>

                  <PatientCard 
                    controlNo={item.controlNo}
                    name={item.name}
                    age={item.age}
                    gender={item.gender} />
                </TouchableOpacity>
              )  
            }}
          />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    patients: state.patients.patients,
    err: state.patients.err,
    isLoading: state.patients.isLoading
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _searchPatient : ()=> dispatch(action.searchPatient())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PatientList);