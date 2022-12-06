// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBIJUhJW4GdD0hgP-1KGlXXOObBcMo_P0",
    authDomain: "ticket-booking-ee35c.firebaseapp.com",
    projectId: "ticket-booking-ee35c",
    storageBucket: "ticket-booking-ee35c.appspot.com",
    messagingSenderId: "189096457170",
    appId: "1:189096457170:web:78dcb7a6d75f46bae50e0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;