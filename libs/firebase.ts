// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlcsPC_TX4nxDKyfZmjFonRo2Cpetq4Hs",
    authDomain: "bhattarai-ecommerce-23ebf.firebaseapp.com",
    projectId: "bhattarai-ecommerce-23ebf",
    storageBucket: "bhattarai-ecommerce-23ebf.appspot.com",
    messagingSenderId: "847982315903",
    appId: "1:847982315903:web:40daa63f076b3a3335f24a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;