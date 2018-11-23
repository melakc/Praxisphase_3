import React, { Component } from 'react';
import './ButtonSend.css';

class ButtonSend extends Component{
    constructor(props){
        super(props);
        this.state= {
            greeting: ''
        }

    }
   
    onGreetClicked() {
        // darf nur eine Variable haben->Variablen inline (kein "" + ""+ etc)
        alert(`Hello, ${this.state.greeting}`);

        this.setState({
            greeting:''
        });
        if(this.inputField){
            this.inputField.focus();
        }
    }
    getCharsRemaining(){
        //wie debugging nur leichter
        console.log(this.props.maxLength);
        console.log(this.state.greeting.length);
        console.log("längeTest");
        let charlength=this.props.maxLength - this.state.greeting.length;

        if(charlength < 0){
            charlength = 0;
        }
        
        return charlength;
    }
 
    isGreetingValid(){
        return (this.state.greeting.length > 0 && this.getCharsRemaining() >= 0);
    }
    render() {

        const greetingValid = this.isGreetingValid();
        return(
            <button
                disabled={ !greetingValid }
                onClick={ () => this.onGreetClicked() } > Grüßchen
            </button> 
            
        );
    }
}
export default ButtonSend;
