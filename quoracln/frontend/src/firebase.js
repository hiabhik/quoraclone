// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF5_OWzV6S5zj5ap09Yb_OtBUgOBUaHV4",
  authDomain: "quoraclone-7801c.firebaseapp.com",
  projectId: "quoraclone-7801c",
  storageBucket: "quoraclone-7801c.appspot.com",
  messagingSenderId: "1078014364508",
  appId: "1:1078014364508:web:9fe0628770a94a8ec4cf99",
  measurementId: "G-FLFD21P61R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()
 const provider = new GoogleAuthProvider()

export {app,auth,provider}

