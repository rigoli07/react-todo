var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
//calling configureStore and then grabbing the configure function from it
var store = require('configureStore').configure(); 
import firebase from 'app/firebase/';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        hashHistory.push('/todos');
    } else {
        hashHistory.push('/');
    }
});

store.dispatch(actions.startAddTodos());

//used for listening to changes on the store
//store.subscribe(() => { 
//    var state = store.getState();    
//    console.log('New state', state);    
//    TodoAPI.setTodos(state.todos);
//});

//var initialTodos = TodoAPI.getTodos();
//store.dispatch(actions.addTodos(initialTodos));

//async request which fetches the records from the database

//load foundation
$(document).foundation();

require('style!css!sass!applicationStyles')



ReactDOM.render(
    //add tag so that the todoApp and all of it's children can access the store, as well as disatch actions
	<Provider store={store}> 
        {router}
    </Provider>,
    document.getElementById('app')
);