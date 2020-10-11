import * as firebase from 'firebase';
import 'firebase/auth';
import "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDybJoZwc5dEpAvR-Yv6MABRBPMqYtaUB8",
    authDomain: "classscheduler-4b343.firebaseapp.com",
    databaseURL: "https://classscheduler-4b343.firebaseio.com",
    projectId: "classscheduler-4b343",
    storageBucket: "classscheduler-4b343.appspot.com",
    messagingSenderId: "272445632421",
    appId: "1:272445632421:web:07701d02260010ff71c24c",
    measurementId: "G-TTJGQD3EXD"
  };
  
firebase.initializeApp(firebaseConfig);

export { firebase };