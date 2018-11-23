import React, { Component } from 'react';
import './InputField.css';

class InputField extends Component {
    constructor(props){
            super(props);
            this.state= {
                greeting: ''
        }
  
    }

    onGreetingChange(event) {
        const text=event.target.value;
        this.setState({
            greeting: text
        });
        this.props.greeter.setGreeting(text);
    }

    getCharsRemaining(){
        //wie debugging nur leichter
        console.log(this.props.maxLength);
        console.log(this.state.greeting.length);
        console.log("TestingGetCharsRemaining");
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
            <input 
                maxLength={this.props.maxLength}
                className={greetingValid ? 'valid':'invalid'} 
                value={this.state.greeting}
                onChange={(e)=>this.onGreetingChange(e)}
                // ref= { (c) =>  this.inputField = c }
            />
        );
    }
}
export default InputField;