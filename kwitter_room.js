// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBr-_ehsaJ-PWJG7n5DNVrtSLSHzj_8TBM",
    authDomain: "kwitter-decorated.firebaseapp.com",
    databaseURL: "https://kwitter-decorated-default-rtdb.firebaseio.com",
    projectId: "kwitter-decorated",
    storageBucket: "kwitter-decorated.appspot.com",
    messagingSenderId: "203531325627",
    appId: "1:203531325627:web:891e4636d539327663999e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();

function addRoom() {

}

function logout() {
    
}