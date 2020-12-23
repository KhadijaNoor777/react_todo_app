import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    //updating forminput field with data
    addInput = (e) => this.setState({[e.target.name]: e.target.value});

    //adding new property and setting it to title
    //again setting the title nothing
    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

    render() {
        return (
            <form onSubmit={this.submitTodo} style={{display: 'flex'}}>
                <input type='text' name='title' placeholder='Add Todo...' 
                        value={this.state.title} onChange={this.addInput}
                        style={{flex: '10', padding: '5px'}} />
                <input type='submit' value='Submit' className='btn' style={{flex: '1'}} />
            </form>
        )
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
