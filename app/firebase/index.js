import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyC5lEhsVaeYUWNyeHnubCYyPNy8whIunT0",
        authDomain: "todo-app-b208e.firebaseapp.com",
        databaseURL: "https://todo-app-b208e.firebaseio.com",
        projectId: "todo-app-b208e",
        storageBucket: "todo-app-b208e.appspot.com",
        messagingSenderId: "591188432419"
    };
    firebase.initializeApp(config);    
} catch (e) {
    
}

export var firebaseRef = firebase.database().ref();
export default firebase;
