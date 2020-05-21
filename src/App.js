import React, { Component } from 'react';
import './App.css';
import Todos from './todos';
import 'materialize-css/dist/css/materialize.css';
import AddTodo from './addForm';
import Clock from 'react-live-clock';

class App extends Component{
  state={
    todos:[
      {id:1, content:'Buy Milk'},
      {id:2, content: 'play mario'}
    ]
  }

  deleteTodo=(id)=>{
    const todos= this.state.todos.filter(todo => todo.id != id);
    this.setState({
      todos
    });
  }
  
  addTodo=(todo)=>{
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos
    });
  }
  render(){
  return (
    <div className="App container">
      <h1 className="center blue-text head-text">Todo's</h1>
        <h1><Clock className="blue-text text-darken-1 right myClock" format={'HH:mm:ss'} ticking={true} timezone={'ind'} /></h1>
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    </div>
  );
}
}
export default App;
