// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCO_eTBrh3g2A9JHScINIuHUbaXN7bC_xo",
    authDomain: "starwarsdb-4d101.firebaseapp.com",
    databaseURL: "https://starwarsdb-4d101-default-rtdb.firebaseio.com",
    projectId: "starwarsdb-4d101",
    storageBucket: "starwarsdb-4d101.appspot.com",
    messagingSenderId: "182653735948",
    appId: "1:182653735948:web:00bae74561822126938a29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;