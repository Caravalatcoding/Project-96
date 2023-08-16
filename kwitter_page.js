var firebaseConfig = {
      apiKey: "AIzaSyBADnQ6Pc48gWNrlXVzhqx13JPSbxk60PI",
      authDomain: "kwitter-a65ff.firebaseapp.com",
      databaseURL: "https://kwitter-a65ff-default-rtdb.firebaseio.com",
      projectId: "kwitter-a65ff",
      storageBucket: "kwitter-a65ff.appspot.com",
      messagingSenderId: "188737315711",
      appId: "1:188737315711:web:1651abc47351f367f1304a"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();



function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
    window.location = "index.html";
}

function send()
{
      msg = document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            like: 0,
            message: msg,
            name: user_name
      });

      document.getElementById("msg").value = "";
}