// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMuTqe9M6owZNrYXOku-iX3w6snW7xO9M",
  authDomain: "mern-book-inventory-d482e.firebaseapp.com",
  projectId: "mern-book-inventory-d482e",
  storageBucket: "mern-book-inventory-d482e.appspot.com",
  messagingSenderId: "410371738216",
  appId: "1:410371738216:web:34ee55dc1fdf8d33b789dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;