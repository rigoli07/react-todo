var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp')

var actions = require('actions');
var store = require('configureStore').configure(); //calling configureStore and then grabbing the configure function from it

store.subscribe(() => { //used for listening to changes on the store
    console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

//load foundation
$(document).foundation();

require('style!css!sass!applicationStyles')


ReactDOM.render(
	<TodoApp/>,
    document.getElementById('app')
);