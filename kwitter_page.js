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
    Username123 = localStorage.getItem("Username");
    RomNamer123 = localStorage.getItem("roomname");
    function SendBut(){
      Bruh123 = document.getElementById("InputClear").value;
      firebase.database().ref(RomNamer123).push({
            Name : Username123,
            message : Bruh123,
            Like : 0
      });
      document.getElementById("InputClear").value = "";
    }
function getData() { firebase.database().ref("/"+RomNamer123).on('value', function(snapshot) { document.getElementById("Output3").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
        console.log(firebase_message_id);
        console.log(message_data);
        Name = message_data['Name'];
        message = message_data['message'];
        Like = message_data['Like'];
        Name_With_Tag = "<h4>"+Name+"<img class = 'user_tick' src='tick.png'> </h4>";
        message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
        like_button = "<button class='btm btm-warning' id="+firebase_message_id+" value="+Like+" onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphiconn-thumbs-up'> Like:"+Like+"</span></button><hr>";
        row = Name_With_Tag+message_with_tag+like_button+span_with_tag;
        document.getElementById("Output3").innerHTML+=row;

      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on like button"+message_id);
      button_id = message_id;
      Likes = document.getElementById(button_id).value;
      update_Likes = Number(Likes)+1;
      console.log(update_Likes);
      firebase.database().ref(RomNamer123).child(message_id).update({
            Like:update_Likes
      });
}
function Logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("roomname")
      window.location = "index.html";
}