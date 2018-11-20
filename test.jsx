function formatName(user){
    return user.firstName+' '+user.lastName;
}
const user={firstName:'Melise', lastname: 'Akcay'};
const element=<h1> Hallo, {formatName(user)} !  </h1>;
ReactDOM.render(element, document.getElementById('root'));
