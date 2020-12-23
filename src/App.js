import React from 'react';      //include react for making class
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import {v4 as uuid} from 'uuid';      //for generating random ids, installed using 'npm i uuid'
import About from './components/pages/About';
import Axios from 'axios';    //fetches data from an api

class App extends React.Component {
  state = {
    todos: []
    // todos: [
    //   {
    //     id: uuid(),
    //     title: 'watch videos',
    //     completed: false
    //   },
    //   {
    //     id: uuid(),
    //     title: 'update docs',
    //     completed: false
    //   },
    //   {
    //     id: uuid(),
    //     title: 'Try on',
    //     completed: false
    //   }
    // ]
  }

  //api request for data of todos
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data})); 
    //?_limit=10 defines how much rows of data we want
  }


  //toggle completed
  markComplete = (id) => {
    console.log(id)
    //this.state.completed = true;
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id)
        todo.completed = !todo.completed;
      return todo;
    })})
  }

  //deleting a todo
  deleteTodo = (id) => {
    console.log(id)
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
                .then(res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
    //this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  //adding a new todo
  addTodo = (title) => {
    console.log(title);

    // Axios.post('https://jsonplaceholder.typicode.com/todos',{
    //   id: uuid(),
    //   title: title,
    //   completed: false
    // }).then(res => this.setState({todos: [...this.state.todos, res.data]}))

    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
 
  render(){
    console.log(this.state.todos);
    return (
      //single curly braces when passing a variable
      <Router>
        <div className="App">
          {/* <h1 style={hStyle}>TODO LIST</h1> */}
          <div className='container'>
            <Header />
            <Route exact path='/' render={props =>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos= {this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} /> 
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

// const hStyle = {
//   color: 'purple'
// }

export default App;
