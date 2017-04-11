import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC5lEhsVaeYUWNyeHnubCYyPNy8whIunT0",
    authDomain: "todo-app-b208e.firebaseapp.com",
    databaseURL: "https://todo-app-b208e.firebaseio.com",
    projectId: "todo-app-b208e",
    storageBucket: "todo-app-b208e.appspot.com",
    messagingSenderId: "591188432419"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0'
    },
    isRunning: true,
    user: {
        name: 'Carmelo',
        age: 32
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'walk the dog'
});

todosRef.push({
    text: 'clean the house'
});

/*
notesRef.on('child_changed', (snapshot) => {
    console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
    console.log('child_removed', snapshot.key, snapshot.val());
});
/*
firebaseRef.child('user').update({
    name: 'Wade'
});

firebaseRef.child('app').update({
        version: '2.0'
});

firebaseRef.child('user').on('value', (snapshot) => {
    console.log('user ref changed', snapshot.val());
});

firebaseRef.on('value', (snapshot) => {
   console.log('Got value', snapshot.val());
});

firebaseRef.off();

firebaseRef.child('app').once('value').then((snapshot) => {
    console.log('Got entire database', snapshot.key, snapshot.val());
}, (e) => {
    console.log('Unable to fetch value', e);
});

firebaseRef.update({
    isRunning: null
});

firebaseRef.child('user/age').remove();

firebaseRef.update({
    isRunning: false,
    'app/name': 'Todo Application'
});

//same as above
firebaseRef.child('app').update({
    name: 'Todo Application'
});

firebaseRef.update({
    'app/name': 'Todo Application',
    'user/name': 'Andrew'
});

firebaseRef.child('app').update({
    name: 'Todo Application'
});

firebaseRef.child('user').update({
    name: 'Wade'
});

/*firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0'
    },
    isRunning: true,
    user: {
        name: 'Carmelo',
        age: 32
    }
}).then(() => {
    console.log('Set worked');
}, (e) => {
    console.log('Set failed');    
})

firebaseRef.child('app').set({
    name: 'Todo Application'
});*/