import firebase from "firebase";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwe1XFOEoduUGbzzlpxYdZhqmI8vSpz_A",
  authDomain: "choose-wisely-4aeef.firebaseapp.com",
  projectId: "choose-wisely-4aeef",
  storageBucket: "choose-wisely-4aeef.appspot.com",
  messagingSenderId: "450743865229",
  appId: "1:450743865229:web:8cb4b13ea6add8a68277c4",
  measurementId: "G-PE8KSS674F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { firebaseApp, googleProvider, auth, db, storage };
