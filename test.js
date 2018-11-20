import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    function formatName(user){
    return ('Hallo ' + user.firstName+' '+user.lastName+ ' !');
}
}
}
const user={firstName:'Melise', lastname: 'Akcay',};
const element=<h1> Hallo, {formatName(user)} !  </h1>;
ReactDOM.render(<Hello/>, document.getElementById('root'));
