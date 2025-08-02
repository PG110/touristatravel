// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRHKK5Q0CWlayJrBXijqzQxQlX8yf7sX8",
  authDomain: "library-13177.firebaseapp.com",
  projectId: "library-13177",
  storageBucket: "library-13177.appspot.com",
  messagingSenderId: "390223007267",
  appId: "1:390223007267:web:d1ab4e0f23568538bd2b96",
  measurementId: "G-4DMHP9H7W8"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export { app, storage }; 