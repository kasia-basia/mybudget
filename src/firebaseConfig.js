import firebase from "firebase";

const config = {
    apiKey: "AIzaSyC1sqVb8JuAV6Fh5ZKr94x5lHy496ACsj0",
    authDomain: "mybudget-a9260.firebaseapp.com",
    databaseURL: "https://mybudget-a9260.firebaseio.com",
    projectId: "mybudget-a9260",
    storageBucket: "mybudget-a9260.appspot.com",
    messagingSenderId: "446089654535",
    appId: "1:446089654535:web:314a663c0caad286cd55a2"
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase;