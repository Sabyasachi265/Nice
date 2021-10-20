
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
    username = localStorage.getItem("Username");
    document.getElementById("Welcome!withname").innerHTML = "Welcome! " + username;
    function ButtonToPage3(){
          roomname = document.getElementById("room_name").value;
          firebase.database().ref("/").child(roomname).update({
                purpose : "Adding Room Name"
          });
          localStorage.setItem("roomname", roomname);
          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("Output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name-"+ Room_names);
      row = "<div class='room_name' id="+ Room_names +"onClick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("Output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}
function Logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("roomname")
      window.location = "index.html";
}