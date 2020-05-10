// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");
const firebaseConfig = {
  apiKey: "AIzaSyAay_7_s1z41C8jLZP1za1CInuZS2OQRik",
  authDomain: "cmdc-276022.firebaseapp.com",
  databaseURL: "https://cmdc-276022.firebaseio.com",
  projectId: "cmdc-276022",
  storageBucket: "cmdc-276022.appspot.com",
  messagingSenderId: "801173140402",
  appId: "1:801173140402:web:58b540bdacd4ffd55f2aab",
  measurementId: "G-9C4YQN8T41",
};

// Add the Firebase products that you want to use
require("firebase/firestore");

const firebaseDB = () => {
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }
  return firebase.firestore();
}
export default firebaseDB
