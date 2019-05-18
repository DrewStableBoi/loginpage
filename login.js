const database = [
    {
       firstName: 'Drew',
       lastName: 'Hemsley',
       username: 'GrammysFootRub',
       password: 'bitch-ass'

    },
    {
       firstName: 'Matt',
       lastName: 'Ludlow',
       username: 'Croozer29',
       password: 'bitch-ass'

    },
    {
       firstName: 'Jake',
       lastName: 'Hess',
       username: 'JakePattyCake',
       password: 'bitch-ass'

    },
];

function handleSubmit() {

    const usernameElement = document.getElementById('username');
    const passwordElement = document.getElementById('password');
  
    const username = usernameElement.value;
    const password = passwordElement.value;
  
    // get user by username
    const foundUser = database.find(function(user){
      return user.username === username;
    })
  
    if (!foundUser) {
      alert('You suck you little shart sucker')
      return;
    }
  
    // compare password. Does the password match?
    if (foundUser.password !== password) {
      alert('You suck you little shart sucker.')
    } else {
      alert(`Welcome, ${foundUser.firstName} ${foundUser.lastName}, you little bitch-ass.`)
     return;
    }
}