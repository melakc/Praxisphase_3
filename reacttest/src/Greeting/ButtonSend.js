import React, { Component } from 'react';
import './ButtonSend.css';

class ButtonSend extends Component{
    constructor(props){
        super(props);
    }
   
    onGreetClicked() {
        // darf nur eine Variable haben->Variablen inline (kein "" + ""+ etc)
        alert(`Hello, ${this.props.greeting}`);
    }
    render() {
        return(
            <button
                disabled={ !this.props.enabled }
                onClick={ () => this.onGreetClicked() } > Grüßchen
            </button> 
            
        );
    }
}
export default ButtonSend;
