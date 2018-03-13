import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBXTeuGawbT3oGCwwxImxsa5Pg7a-4LdPE",
    authDomain: "project1-1520140691842.firebaseapp.com",
    databaseURL: "https://project1-1520140691842.firebaseio.com",
    projectId: "project1-1520140691842",
    storageBucket: "project1-1520140691842.appspot.com",
    messagingSenderId: "599508359739"
  };

firebase.initializeApp(config);
firebase.auth().signInAnonymously().catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
firebase.auth().onAuthStateChanged(function(user) {
if (user) {
    // User is signed in.
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    console.log(uid);
    // ...
} else {
    // User is signed out.
    // ...
}
// ...
});

var eventRef = firebase.database().ref('event');

export default firebase;

export {eventRef}