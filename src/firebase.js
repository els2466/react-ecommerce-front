import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTcz5KpENxusdMy2XXoDkJboe601k3M_8",
  authDomain: "ecommerce-6db43.firebaseapp.com",
  databaseURL: "https://ecommerce-6db43.firebaseio.com",
  projectId: "ecommerce-6db43",
  storageBucket: "ecommerce-6db43.appspot.com",
  messagingSenderId: "340746262017",
  appId: "1:340746262017:web:2bd352b97dcd50dcb81200"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
