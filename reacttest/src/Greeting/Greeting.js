import React, { Component } from 'react';


import RemainingChars from './RemainingChars';
import InputField from './InputField';
import ButtonSend from './ButtonSend';

class Greeting extends Component{
    render() {
        return(
            <div>
            <span style={{backgroundColor:"#FFCDD2", fontSize:"2rem", color:"White", fontWeight:"bold"}}>First React Page</span>
            <form > 
                <span>Whaaasup: </span>
                <InputField />
                <ButtonSend />
                <RemainingChars />
            </form>
            </div>
        );
    }
}
export default Greeting;
