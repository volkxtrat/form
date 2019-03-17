import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBgivGXB2PhRGdSbomoEvSEudkB-CKSc5k",
  authDomain: "todo-trello-fce00.firebaseapp.com",
  databaseURL: "https://todo-trello-fce00.firebaseio.com",
  projectId: "todo-trello-fce00",
  storageBucket: "todo-trello-fce00.appspot.com",
  messagingSenderId: "1014295116688"
};

export default firebase.initializeApp(config);
