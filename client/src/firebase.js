import firebase from 'firebase/app';
import "firebase/auth";


  // Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyDnJ9uRS_V7Dj0Ijy-XHk5RDIUiRCrxbEQ",
    authDomain: "projekt-75130.firebaseapp.com",
    projectId: "projekt-75130",
    storageBucket: "projekt-75130.appspot.com",
    messagingSenderId: "362372939802",
    appId: "1:362372939802:web:ce32a842ae02a4a8c711a3"
  };
  // Initialize Firebase

  //firebase.initializeApp(firebaseConfig);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

//export 
 
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()