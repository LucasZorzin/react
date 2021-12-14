import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD48MuIrXP1jCGawCsbsVHg4OnECbZDM-M",
    authDomain: "react-puma.firebaseapp.com",
    projectId: "react-puma",
    storageBucket: "react-puma.appspot.com",
    messagingSenderId: "141788407018",
    appId: "1:141788407018:web:26becd3feddfd79d3fa393",
    measurementId: "G-9DJLVQGHGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export db
const dataBase = getFirestore(app);
export default dataBase;

