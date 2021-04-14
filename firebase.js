import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBK-SQih-8YM-J8I99QIpd4yMQbBcflho",
  authDomain: "signalclone-app.firebaseapp.com",
  projectId: "signalclone-app",
  storageBucket: "signalclone-app.appspot.com",
  messagingSenderId: "968306417226",
  appId: "1:968306417226:web:ba8145550b1377555c90b3",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
