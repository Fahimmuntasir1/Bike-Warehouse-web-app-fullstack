// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjWA9eIyWVjrr4ILqzJRF38n2BqaGEx5Q",
  authDomain: "bike-warehouse-b8017.firebaseapp.com",
  projectId: "bike-warehouse-b8017",
  storageBucket: "bike-warehouse-b8017.appspot.com",
  messagingSenderId: "973633587896",
  appId: "1:973633587896:web:2a3ddee9ba8070e187024d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
