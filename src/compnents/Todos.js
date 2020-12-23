import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {

  // markComplete = (e) => {
  //   console.log("Hello")
  // }

  render(){
    //console.log(this.props.todos);
    //getting todos from the state and displaying title of each
    //iterating through the todos array using map function
    return this.props.todos.map((todo) => (
      //<h2>Todos</h2>
      //<h4>{todo.title}</h4>
      //<TodoItem key={todo.id} todo = {todo} markComplete={this.markComplete} />
      <TodoItem key={todo.id} todo = {todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default Todos;
