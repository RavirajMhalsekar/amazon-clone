// import firebase from "./firebase";
// import 'firebase/auth';

// import firebase from 'firebase/app';
// import 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2qzAYkRWB1Qv0wVpiGauVD2e0XOSvUCg",
  authDomain: "clone-4734c.firebaseapp.com",
  projectId: "clone-4734c",
  storageBucket: "clone-4734c.appspot.com",
  messagingSenderId: "377141602494",
  appId: "1:377141602494:web:a5ece9cf258d509a0f96ef",
});

const auth = firebase.auth();

export { auth };
