import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

  var config = {
    apiKey: "AIzaSyC4mOsW3uGdYuB-QwdetDdBNIRc4EuPJZM",
    authDomain: "bootcamp-piaic-5fe83.firebaseapp.com",
    databaseURL: "https://bootcamp-piaic-5fe83.firebaseio.com",
    projectId: "bootcamp-piaic-5fe83",
    storageBucket: "",
    messagingSenderId: "831622014858"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots:true })


  export default firebase;