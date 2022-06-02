// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxnIwMArCvHQtBC015rp_n2sCVzXIB1vw",
  authDomain: "custom-your-desk.firebaseapp.com",
  projectId: "custom-your-desk",
  storageBucket: "custom-your-desk.appspot.com",
  messagingSenderId: "784518499952",
  appId: "1:784518499952:web:aad36628ed1971371caeb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFireStoreApp (){
    return app
}