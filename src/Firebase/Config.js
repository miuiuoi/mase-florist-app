import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5RT_jC5krw0lTacNLoT5E_WTBMWKwRT4",
  authDomain: "mase-florist-app.firebaseapp.com",
  projectId: "mase-florist-app",
  storageBucket: "mase-florist-app.firebasestorage.app",
  messagingSenderId: "192027265033",
  appId: "1:192027265033:web:6ff666c5b91c74317890d8",
  measurementId: "G-KCBDQGSPN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);

export {db, auth};