
//ADD YOUR FIREBASE LINKS HERE

  var firebaseConfig = {
    apiKey: "AIzaSyC2a_bgTIwgjKjKhATomrjTkbI51h6c2Ck",
    authDomain: "qwitter-f9858.firebaseapp.com",
    databaseURL: "https://qwitter-f9858-default-rtdb.firebaseio.com",
    projectId: "qwitter-f9858",
    storageBucket: "qwitter-f9858.appspot.com",
    messagingSenderId: "496720287952",
    appId: "1:496720287952:web:6e1804e104a332d8a7a6d5"
  };

    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = 
"";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     
      //End code
      });});}
getData();

function add_room()
{
      room_name = document.getElementById("room_name").ariaValueMax;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}


