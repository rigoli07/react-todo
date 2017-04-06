var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp')

var actions = require('actions');
//calling configureStore and then grabbing the configure function from it
var store = require('configureStore').configure(); 

//used for listening to changes on the store
store.subscribe(() => { 
    console.log('New state', store.getState());
});

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