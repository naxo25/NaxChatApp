
import firebase from "firebase";

const firebaseConfig = {
  // your config
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth()
const firebaseDb = firebaseApp.database()
const storageRef = firebaseApp.storage().ref()
const db = firebaseApp.firestore();

export { firebaseAuth, firebaseDb, storageRef, db }
