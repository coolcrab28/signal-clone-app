import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBK-SQih-8YM-J8I99QIpd4yMQbBcflho",
  authDomain: "signalclone-app.firebaseapp.com",
  projectId: "signalclone-app",
  storageBucket: "signalclone-app.appspot.com",
  messagingSenderId: "968306417226",
  appId: "1:968306417226:web:ba8145550b1377555c90b3",
};

let app;

if (firebase.apps.length === 0) {
  const firebaseApp = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
