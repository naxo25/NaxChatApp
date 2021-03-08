// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
//import { Quasar, QUploader} from 'quasar'

// PUT YOUR OWN FIREBASE CONFIGURATION HERE
var firebaseConfig = {
    apiKey: "AIzaSyDMpRz7qqXLS6dJCgMIyU7c3QXIkPwzQkI",
    authDomain: "asdf-3e590.firebaseapp.com",
    databaseURL: "https://asdf-3e590.firebaseio.com",
    projectId: "asdf-3e590",
    storageBucket: "asdf-3e590.appspot.com",
    messagingSenderId: "990553321355",
    appId: "1:990553321355:web:e461977aeb6c99d1bc098e",
    measurementId: "G-4YHRGW6XW7"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()
let storageRef = firebaseApp.storage().ref

const messaging = firebase.messagging();
messagging.requestPermission()
.then(function(){
	console.log('permiso');	
	return messaging.getToken();
}).then(function(token) {
	console.log(token);
}).catch(function(err){
	console.log('error '+err)
})


export { firebaseAuth, firebaseDb }