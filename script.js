var firebaseConfig = {
    apiKey: "AIzaSyBHw8YJcrsmnvXtj13M63BgfCyG6dxkFTE",
    authDomain: "programming-project-2k24.firebaseapp.com",
    databaseURL: "https://programming-project-2k24-default-rtdb.firebaseio.com",
    projectId: "programming-project-2k24",
    storageBucket: "programming-project-2k24.appspot.com",
    messagingSenderId: "939656621472",
    appId: "1:939656621472:web:173bb32cdfc84d51ad88c5",
    measurementId: "G-KTBEX78DSH"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database variable
var database = firebase.database()

function save() {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  database.ref('users/' + name).set({
    name : name,
    email : email,
    password : password
    
 })
}