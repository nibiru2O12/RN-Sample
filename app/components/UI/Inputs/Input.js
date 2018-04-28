import React,{Component} from 'react'
import styled,{css} from 'styled-components';
import {View,Text,TextInput,Stylesheet} from 'react-native';

const fontSize = {
  sm: "12px",
  md: "24px",
  lg: "36px"
}

const Wrapper = styled.View`
`;

const InputGroup = styled.View`
  position:relative;
  justify-content: center;
`
const Suffix = styled.Text`
  position:absolute;
  right: 10px;
  max-width: 50px;
`;

const Prefix = styled.Text`
  position:absolute;
  left: 10px;
  max-width: 50px;
`;

const Label = styled.Text`
  color: ${props => props.focus ? "#4CAF50" : "#424242"};
`;

const LabelError = styled.Text`
  margin-left: 8px;
  font-size: 13px;
  color: #d50000;
`;

const Textbox = styled.TextInput`
  flex: 1;
  margin-bottom: 10px;
  padding: 10px;
  padding-top: 5px;
  ${props => props.withSuffix && "padding-right: 60px;" }
  font-size: ${props => fontSize[props.size] || "16px"};
  background: ${props => props.focus ? "#DCEDC8" : "white"};
`

class Input extends Component {

  static defaultProps = {
    _onSubmitEditing : ()=> null,
    _onChange: ()=>console.log('default on change')
  }

  componentWillUpdate(props){
    if(props.focus){
      this._input.focus();
    }
  }

  render(){

    const {id,label,suffix,nextFocus,error,required,focus,prefix} = this.props;
    const requiredMark = required && <Text style={{color:"red"}}>* </Text>
    return(
      <Wrapper>
        <Label focus={focus} >{requiredMark}{label}</Label>
        <LabelError>{error}</LabelError>
        <InputGroup>
          <Textbox 
            {...this.props} withSuffix={suffix} 
            onSubmitEditing={()=>this.props._onSubmitEditing()}
            onChangeText={(val)=>this.props._onChange(id,val)}
            innerRef={(input)=>this._input = input} />
          <Prefix>{prefix}</Prefix>
          <Suffix>{suffix}</Suffix>
        </InputGroup>
      </Wrapper>
    )
  }

}

const GroupWrapper = styled.View`
  display:flex;
  flex-direction: row;
`;

export const ControlGroup = props =>{
  return(
    <GroupWrapper>
      {props.children}
    </GroupWrapper>
  )
} 



export default Input;