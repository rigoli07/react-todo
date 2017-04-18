var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp')
var actions = require('actions');
//calling configureStore and then grabbing the configure function from it
var store = require('configureStore').configure(); 
var TodoAPI = require('TodoAPI');

//used for listening to changes on the store
//store.subscribe(() => { 
//    var state = store.getState();    
//    console.log('New state', state);    
//    TodoAPI.setTodos(state.todos);
//});

//var initialTodos = TodoAPI.getTodos();
//store.dispatch(actions.addTodos(initialTodos));

//async request which fetches the records from the database
store.dispatch(actions.startAddTodos());

//load foundation
$(document).foundation();

require('style!css!sass!applicationStyles')


ReactDOM.render(
    //add tag so that the todoApp and all of it's children can access the store, as well as disatch actions
	<Provider store={store}> 
        <TodoApp/>
    </Provider>,
    document.getElementById('app')
);