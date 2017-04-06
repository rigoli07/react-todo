var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';

export var TodoList = React.createClass({
    render: function () {
        var {todos} = this.props;
        var renderTodos = () => {
            if(todos.length === 0) {
                return (
                    <p className="container__message">Nothing to do.</p>
                );
            }

            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            });
        };

        return (
            <div>
                {renderTodos()}
            </div>
        )
    }
});

export default connect(
    //only requiring todos array, not everything in the state
    (state) => {
        return {
            todos: state.todos
        };    
    }
)(TodoList);
//we want to do a connection and connect it to TodoList