import React, { Component } from 'react';


import RemainingChars from './RemainingChars';
import InputField from './InputField';
import ButtonSend from './ButtonSend';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: ''
        }

    }
    setGreeting(text) {
        this.setState({ greeting: text });
    }
    render() {
        // const greetingValid = InputField.isGreetingValid();
        console.log("currentLength:"+this.state.currentLength);
        return (
            <div>
                <span style={{ backgroundColor: "#FFCDD2", fontSize: "2rem", color: "White", fontWeight: "bold" }}>First React Page</span>
                <form >
                    <span>Whaaasup: </span>
                    <InputField maxLength={this.props.maxLength} greeter={this} />
                    <ButtonSend enabled={this.state.greeting.length>0} greeting={this.state.greeting}/>
                    <RemainingChars maxLength={this.props.maxLength} currentLength={this.state.greeting.length} />
                </form>
            </div>
        );
    }
}
export default Greeting;
