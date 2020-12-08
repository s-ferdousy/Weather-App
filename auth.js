//for authentication

var firebaseConfig = {
    apiKey: "AIzaSyDPMtKTDm4asfv7n4xec_z9h4vcRSgBuKo",
    authDomain: "weather-fd666.firebaseapp.com",
    databaseURL: "https://weather-fd666.firebaseio.com",
    projectId: "weather-fd666",
    storageBucket: "weather-fd666.appspot.com",
    messagingSenderId: "802568213017",
    appId: "1:802568213017:web:4ed497cfbe6a1775589088",
    measurementId: "G-VJJ5JKXFFH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const auth = firebase.auth();

	function signUp(){
		var email = document.getElementById("emails");
		var password = document.getElementById("passwords");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
	}
	
	function signIn(){	
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
	}
		
	function signOut(){
		auth.signOut();
		alert("Signed Out");
    document.getElementById("user").style.display = "none";		
	}

  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // when user is signed in
    var email = user.email;
		alert("Signed in as " + email);
    document.getElementById("askLogin").style.display = "none";
    document.getElementById("signIN").style.display = "none";
    document.getElementById("signUP").style.display = "none";
    document.getElementById("wdgt").style.display = "block";
    document.getElementById("wgt").style.display = "block";
    document.getElementById("map").style.display = "block";
    document.getElementById("signOut").style.display = "none";
    document.getElementById("signOUT").style.display = "block";
    
    var user = firebase.auth().currentUser;

    if(user != null){
      var email = user.email;
      document.getElementById("user").innerHTML = "Logged in as: " + email;
      document.getElementById("user").style.display = "block";
    }

  } else {
    // No user is signed in.
    document.getElementById("wdgt").style.display = "none";
    document.getElementById("wgt").style.display = "none";
    document.getElementById("map").style.display = "none";
    document.getElementById("askLogin").style.display = "block";
    document.getElementById("signOut").style.display = "none";
    document.getElementById("signOUT").style.display = "none";
  }
});

//toggling signin,signup button
function openSignup() {
  var x = document.getElementById("signUP");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("signIN");
  if (y.style.display === "block") {
    x.style.display = "block";
    y.style.display = "none";
  } else {   
  }
}

function navMap(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in
    var elmnt = document.getElementById("map");
    elmnt.scrollIntoView();
  } else {
    // No user is signed 
    alert ("Login to use this feature");
  }
});
}
function navWdgt(){
  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in
    var elmnt = document.getElementById("wgt");
    elmnt.scrollIntoView();
  } else {
    // No user is signed 
    alert ("Login to use this feature");
  }
});
}