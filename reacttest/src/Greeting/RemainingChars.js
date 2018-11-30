import React, { Component } from 'react';


class RemainingChars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: ''
        }

    }

    getCharsRemaining() {

        let charlength = this.props.maxLength - this.props.currentLength;
        if (charlength < 0) {
            charlength = 0;
        }

        return charlength;
    }
    hasRemainingChars() {
        return this.getCharsRemaining() > 0;
    }
    isGreetingValid() {
        console.log("length");
        return (this.state.greeting.length > 0 && this.getCharsRemaining() >= 0);
    }

    render() {
        const greetingValid = this.isGreetingValid();
        return (
            console.log("test"),
            <span className={!greetingValid ? "break" : ""}
                style={{ color: this.hasRemainingChars() ? 'green' : '#ff0000', fontSize: "1.2rem" }} >
                {this.getCharsRemaining()} chars remaining
            </span>

        );
    }
}
export default RemainingChars;