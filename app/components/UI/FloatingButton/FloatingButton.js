import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import styled from 'styled-components';

const Button = styled.TouchableOpacity`
    position:absolute;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #4CAF50;
    justify-content: center;
    border-radius: 50; 
    elevation:5;
    align-items: center;
    z-index: 999
`;

const FloatingButton = (props) => {

    return (
        <Button onPress={props.onPress}>
            <Text style={styles.icon}>{props.icon}</Text>
        </Button>
        
    );
}

const styles = StyleSheet.create({
    icon : {
        color : "white",
        fontSize : 30
    }
});

export default FloatingButton;