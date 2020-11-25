import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyArzznxLOsVhe_OlzdOjcl717_bLYm8ZdM",
    authDomain: "full-stack-39572.firebaseapp.com",
    databaseURL: "https://full-stack-39572.firebaseio.com",
    projectId: "full-stack-39572",
    storageBucket: "full-stack-39572.appspot.com",
    messagingSenderId: "908776232238",
    appId: "1:908776232238:web:66bf34cc384b3c0fead6bf",
    measurementId: "G-YJ3P5Y5LHS"
};

const firebaseConf = firebase.initializeApp(config);
export default firebaseConf;