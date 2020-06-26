import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBPKoKWKTj0wQjdE0d8sHUlZnLOQV1822E",
    authDomain: "spyfall-1968f.firebaseapp.com",
    databaseURL: "https://spyfall-1968f.firebaseio.com",
    projectId: "spyfall-1968f",
    storageBucket: "spyfall-1968f.appspot.com",
    messagingSenderId: "816173027099",
    appId: "1:816173027099:web:800b1d5e7eb7ade6af8dbe"
};


firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();