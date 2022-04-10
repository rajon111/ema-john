import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWhv7GghIopVouoAVli5LeXhotqVTw18E",
  authDomain: "ema-jhn-simple-e64cd.firebaseapp.com",
  projectId: "ema-jhn-simple-e64cd",
  storageBucket: "ema-jhn-simple-e64cd.appspot.com",
  messagingSenderId: "435604564573",
  appId: "1:435604564573:web:af9a05fa95592962307bb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;