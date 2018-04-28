import React, { Component } from 'react'
import {ScrollView,FlatList,Button,View,Text,TextInput,Stylesheet,TouchableOpacity} from 'react-native';
import PatientCard from '../UI/Cards/PatientCard';
import Searchbox from '../UI/Inputs/Searchbox';
import BarcodeScanner from '../BarcodeScanner';

class PatientList extends Component{

  _onChange = value => {

    this.setState({scan:false,searchString:value})

    const patients = [...this.state.patients].filter(patient=>patient.name.includes(value));
    // this.setState({patients})

  }

  _search = ({data}) => {
    this.setState({scan:false,searchString:data})
  }

  state = {
    searchString:"",
    scan:false,
    patients: [
      {
        key:"1",
        controlNo:"009-20012",
        name:"Gagui, Robert Jhon",
        age: 28,
        gender: "male"
      },
      {
        key:"2",
        controlNo:"010-20012",
        name:"Isip, Michelle",
        age: 28,
        gender: "female"
      },
      {
        key:"3",
        controlNo:"011-20012",
        name:"Isip, Michelle",
        age: 28,
        gender: "female"
      },
      {
        key:"4",
        controlNo:"012-20012",
        name:"Isip, Michelle",
        age: 28,
        gender: "female"
      },
      {
        key:"5",
        controlNo:"013-20012",
        name:"Isip, Michelle",
        age: 28,
        gender: "female"
      },
      {
        key:"6",
        controlNo:"014-20012",
        name:"Isip, Michelle",
        age: 28,
        gender: "female"
      },
      {
        key:"7",
        controlNo:"015-20012",
        name:"Isip, Michelle",
        age: 28,
        gender: "female"
      },
      {
        key:"8",
        controlNo:"016-20012",
        name:"Isip, Michelle",
        age: 28,
        gender: "female"
      },
      {
        key:"9",
        controlNo:"017-20012",
        name:"Isip, Michelle",
        age: 28,
        gender: "female"
      },
      {
        key:"10",
        controlNo:"018-20012",
        name:"Isip, Michelle",
        age: 28,
        gender: "female"
      },
      {
        key:"11",
        controlNo:"019-20012",
        name:"Isip, Michelle",
        age: 28,
        gender: "female"
      },
      {
        key:"12",
        controlNo:"020-20012",
        name:"Isip, Michelle",
        age: 28,
        gender: "female"
      },
      {
        key:"13",
        controlNo:"021-20012",
        name:"Isip, Michelle",
        age: 28,
        gender: "female"
      }
    ]
  }

  // componentDidUpdate(a,b){
  //   console.log(a,b)
  //   if(this.state.searchString!==""){
  //     const patients = [...this.state.patients].filter(patient=>patient.name.includes(this.state.searchString));
  //     console.log(patients)
  //     this.setState({patients})
  //   }

  // }

  render(){
    // const patients = mock_data.map((patient,i) => (
    //   <TouchableOpacity
    //     key={patient.controlNo}
    //     onPress={()=>this.props._onPress(patient)}>

    //     <PatientCard 
    //       controlNo={patient.controlNo}
    //       name={patient.name}
    //       age={patient.age}
    //       gender={patient.gender} />
    //   </TouchableOpacity>
    // ));
    const patients = [...this.state.patients].filter(patient=>(
      patient.controlNo.includes(this.state.searchString) || patient.name.includes(this.state.searchString) 
    ));
 
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

export default PatientList;