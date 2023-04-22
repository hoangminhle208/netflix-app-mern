import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8dhy04317T9dWvtWkJ5sm491jnZy1fxw",
  authDomain: "netflix-c5924.firebaseapp.com",
  projectId: "netflix-c5924",
  storageBucket: "netflix-c5924.appspot.com",
  messagingSenderId: "278852587055",
  appId: "1:278852587055:web:d9cbf7e4f96fe53815c0da",
  measurementId: "G-L4BW6FWR98"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;