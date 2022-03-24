
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBMQhlWEJ4NXp_u0MG2n87kQ7B2Ln4CDOU",
      authDomain: "kwitter-21e67.firebaseapp.com",
      projectId: "kwitter-21e67",
      storageBucket: "kwitter-21e67.appspot.com",
      messagingSenderId: "798141172500",
      appId: "1:798141172500:web:a71f10e70eba8a1aabd001"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
