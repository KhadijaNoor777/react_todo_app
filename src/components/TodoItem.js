import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    
    getStyle = () => {
        return {
            color: 'black',
            padding: '10px',
            borderBottom: '1px solid gray',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }


    
    render() {

        //destructuring
        //if we do not want to use this.props.todo again and again then in this way we can access its properties.
        const {id, title } = this.props.todo;   

        return (
            //use double curly braces for inline css
            //single curly braces when using a variable/function
            <div style={{backgroundColor: 'lightgray'}}>     
              <p style={this.getStyle()}>
              <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
              {this.props.todo.title} {' '}
              <button onClick={this.props.deleteTodo.bind(this,id)} style={btnStyle}>x</button>
              </p>  
            </div>
        )
    }
}

const btnStyle = {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

export default TodoItem
