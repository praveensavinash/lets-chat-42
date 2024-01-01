
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function send()
{
    msg = document.getElementById("msg").ariaValueMax;
    firebase.database().ref.push({
        name:user_name,
        message:msg,
        like:0
     });

    document.getElementsById("msg").value = "";
}

function getData() 
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach
function (childSnapshot)  {childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose");};
firebase_message_id = childKey;
message_data = childData;
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row 
getData();
}
)
} 



 



function updateLike(message_id)
{ 
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes = document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);
}



function logout() 
{
  window.location = "index.html";
}
