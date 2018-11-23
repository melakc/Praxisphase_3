import React, { Component } from 'react';


class RemainingChars extends Component {
    constructor(props) {
            super(props);
            this.state = {
                greeting: ''
            }

    }

    getCharsRemaining() {
        //wie debugging nur leichter
        console.log(this.props.maxLength);
        console.log(this.state.greeting.length);
        console.log("laenge");
        let charlength = this.props.maxLength - this.state.greeting.length;
        if (charlength < 0) {
            charlength = 0;
        }

        return charlength;
    }
    hasRemainingChars() {
        console.log("callingHasRemChars");
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