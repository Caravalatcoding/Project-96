var firebaseConfig = {
  apiKey: "AIzaSyBADnQ6Pc48gWNrlXVzhqx13JPSbxk60PI",
  authDomain: "kwitter-a65ff.firebaseapp.com",
  databaseURL: "https://kwitter-a65ff-default-rtdb.firebaseio.com",
  projectId: "kwitter-a65ff",
  storageBucket: "kwitter-a65ff.appspot.com",
  messagingSenderId: "188737315711",
  appId: "1:188737315711:web:1651abc47351f367f1304a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
  room_name =  document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  })

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}


function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
    window.location = "index.html";
}
