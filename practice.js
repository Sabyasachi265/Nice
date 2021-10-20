var firebaseConfig = {
    apiKey: "AIzaSyB5YdimXNAXr7fmu8IZoHMp3TuuU9woJkw",
    authDomain: "kwitter-76602.firebaseapp.com",
    databaseURL: "https://kwitter-76602-default-rtdb.firebaseio.com",
    projectId: "kwitter-76602",
    storageBucket: "kwitter-76602.appspot.com",
    messagingSenderId: "404224013366",
    appId: "1:404224013366:web:4ec9b3a18cff52a4d45497"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 function Username(){
     user_name = document.getElementById("inputPractice").value;
     firebase.database().ref("/").child(user_name).update({
     purpose : "Adding User" 
     });
 } 