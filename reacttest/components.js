class Greeter extends React.Component {
    constructor(props){
        super(props);
        this.state= {
          greeting: ''
        }
      
    }
   
    onGreetingChange(event) {
        this.setState({
            greeting: event.target.value

        });
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
        let charlength=this.props.maxLength - this.state.greeting.length;

        if(charlength < 0){
            charlength == 0;
        }

        return charlength;
    }
    hasRemainingChars(){
        console.log("callingHasRemChars");
        return this.getCharsRemaining() > 0 ;
    }
    isGreetingValid(){
        return (this.state.greeting.length > 0 && this.getCharsRemaining() >= 0);
    }
    
    render() {
        const greetingValid = this.isGreetingValid();
        return (
            
            <div>
                
                <span style={{backgroundColor:"#FFCDD2", fontSize:"2rem", color:"White", fontWeight:"bold"}}>First React Page</span>
                <form > 
                <span>Whaaasup: </span>
                <input 
                    maxLength={this.props.maxLength}
                    className={greetingValid ? 'valid':'invalid'} 
                    value={this.state.greeting}
                    onChange={(e)=>this.onGreetingChange(e)}
                    // ref= { (c) =>  this.inputField = c }
                     />
                <button
                disabled={ !greetingValid }
                onClick={ () => this.onGreetClicked() } > Grüßchen
                </button>
                <span className={!greetingValid?"break" : ""}
                style={{color:this.hasRemainingChars() ? 'green' : '#ff0000', fontSize:"1.2rem"}}
                >{this.getCharsRemaining()} chars remaining</span>
                </form>
            </div>
         );
        
       
    }

    // class RemainingChars extends React.Component  {
    //     constructor(props){
    //             super(props);
    //             this.state = {
    //                 greeting: ''
    //             }
      
    //     }
    //     render() {
    //             const greetingValid = this.isGreetingValid();
    //             return(
    //                 <span className={!greetingValid?"break" : ""}
    //                     style={{color:this.hasRemainingChars() ? 'green' : '#ff0000', fontSize:"1.2rem"}} >
    //                 {this.getCharsRemaining()} chars remaining 
    //                 </span> 
    //             );
    //     }
    // }
    // class InputField extends React.Component {
    //     constructor(props){
    //             super(props);
    //             this.state= {
    //             greeting: ''
    //     }
      
    // }
    //     render() {
    //         const greetingValid = this.isGreetingValid();
    //         return(
    //             <input 
    //                 maxLength={this.props.maxLength}
    //                 className={greetingValid ? 'valid':'invalid'} 
    //                 value={this.state.greeting}
    //                 onChange={(e)=>this.onGreetingChange(e)}
    //                 // ref= { (c) =>  this.inputField = c }
    //                  />
    //         );
    //     }
    // }
    //     class ButtonSend extends React.Component{
    //         constructor(props){
    //             super(props);
    //             this.state= {
    //             greeting: ''
    //         }
      
    // }
    //         render() {

    //             const greetingValid = this.isGreetingValid();
    //             return(
    //                 <button
    //                 disabled={ !greetingValid }
    //                 onClick={ () => this.onGreetClicked() } > Grüßchen
    //                 </button> 
    //             );
    //         }
    //     }
    //     class GreetingDialog extends React.Component{
    //         constructor(props){
    //             super(props);
    //             this.state= {
    //             greeting: ''
    //         }
      
    // }
    //         render() {
    //             return(
    //                 <div>
    //                 <span style={{backgroundColor:"#FFCDD2", fontSize:"2rem", color:"White", fontWeight:"bold"}}>First React Page</span>
    //                 <form > 
    //                     <span>Whaaasup: </span>
    //                     <InputField />
    //                     <ButtonSend />
    //                     <RemainingChars />
    //                 </form>
    //                 </div>
    //             );
    //         }
    //     }
// }
}      
ReactDOM.render(<Greeter  maxLength={10}/>, document.getElementById('greeterMountPoint'));

document.write("test");