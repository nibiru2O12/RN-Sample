import React, { Component } from 'react';
import t from 'tcomb-form-native';
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TextInput,
  StyleSheet} from 'react-native';

import Input,{ControlGroup} from '../../../UI/Inputs/Input';


class Physical extends Component {

  static navigationOptions = ({navigation}) => {
    return  (
        {
            title  : 'P.E'
        }
    )
  }

  state = {
    form: {
      height:{
        isFocus:true,
        value:""
      },
      weight:{
        isFocus:false,
        value:"",
      },
      bp_systolic:{
        isFocus:false,
        value:"",
      },
      bp_diastolic:{
        isFocus:false,
        value:"",
      },
      pulse_rate:{
        isFocus:false,
        value:"",
      },
      respiratory_rate:{
        isFocus:false,
        value:"",
        }
      }
      
    }

  _onChange = (field,value) => {

    const {err} = this._validateNumber(value);

    let fieldToChange = {...this.state.form[field],value,error:err}
    let form = {...this.state.form,[field]:{...fieldToChange}}

    form = Object.keys(form).reduce((acc,nxt)=>{
      acc[nxt] = {...form[nxt],isFocus: field === nxt }
      return acc; 
    },{});

    this.setState({form})
  }

  _nextFocus = (input) => {

    
    let form = {...this.state.form}

    form = Object.keys(form).reduce((acc,nxt)=>{
      acc[nxt] = {...form[nxt],isFocus: input === nxt }
      return acc; 
    },{});

    this.setState({form})

  }

  _validateNumber = (value) => {
    if(isNaN(value)){
      return {err:"Invalid Number"}
    }
    return {err:null}
  }
 
  render(){

    const {form} = this.state;
    return(
        <View style={styles.container} >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Input 
            id="height"
            label="Height (cm)" 
            suffix="cm"
            required size="md"
            focus={form.height.isFocus}
            keyboardType = 'numeric'
            error={form.height.error}
            onFocus={()=>this._nextFocus("height")}
            _onChange={this._onChange}
            _onSubmitEditing={()=>this._nextFocus("weight")} />
          
          <Input 
            id="weight"
            label="Weight (lbs)" 
            required size="md"
            focus={form.weight.isFocus}
            keyboardType = 'numeric'
            suffix="lbs"
            onFocus={()=>this._nextFocus("weight")}
            _onSubmitEditing={()=>this._nextFocus("bp_systolic")} />
          
           <Input 
            id="bp_systolic"
            label="BP - Systolic" 
            required size="md"
            focus={form.bp_systolic.isFocus}
            keyboardType = 'numeric'
            onFocus={()=>this._nextFocus("bp_systolic")}
            _onSubmitEditing={()=>this._nextFocus("bp_diastolic")} /> 

          <Input 
            id="bp_diastolic"
            label="BP - Diastolic" 
            required size="md"
            focus={form.bp_diastolic.isFocus}
            keyboardType = 'numeric'
            onFocus={()=>this._nextFocus("bp_diastolic")}
            _onSubmitEditing={()=>this._nextFocus("pulse_rate")} /> 


          <Input 
            id="pulse_rate"
            label="Puplse Rate (per minute)" 
            required size="md"
            suffix="/min" 
            focus={form.pulse_rate.isFocus} 
            keyboardType = 'numeric'
            onFocus={()=>this._nextFocus("pulse_rate")}
            _onSubmitEditing={()=>this._nextFocus("respiratory_rate")} />
            
          <Input 
            id="respiratory_rate"
            label="Respirator Rate (per minute)" 
            required size="md"
            suffix="/min" 
            keyboardType = 'numeric'
            onFocus={()=>this._nextFocus("respiratory_rate")}
            focus={form.respiratory_rate.isFocus}  />
         
        </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  scrollView: {
    padding: 20,
  }
});

export default Physical;