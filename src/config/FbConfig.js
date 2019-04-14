import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 

  var config = {
    apiKey: "AIzaSyD8-dWll7n5DSOKa4RcwWxOHHdtWlBv1jk",
    authDomain: "parkingsystemapp-bb111.firebaseapp.com",
    databaseURL: "https://parkingsystemapp-bb111.firebaseio.com",
    projectId: "parkingsystemapp-bb111",
    storageBucket: "parkingsystemapp-bb111.appspot.com",
    messagingSenderId: "895700295500"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots:true })


  export default firebase;