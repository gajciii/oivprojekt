import {FirebaseApp, getApp, getApps, initializeApp} from "@firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBHbp5XamgvbXsjXIJRp7dtCoX9fDREO-o",
    authDomain: "fir-twofa.firebaseapp.com",
    projectId: "fir-twofa",
    storageBucket: "fir-twofa.appspot.com",
    messagingSenderId: "793770135473",
    appId: "1:793770135473:web:767fcbed664ba1f3ee7790"
  };

let app: FirebaseApp;

if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
}else {
    app = getApp();
}

export { app }