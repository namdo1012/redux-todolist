import './App.css';
import AddTodo from './components/todoAdd';
import TodoList from './components/todoList';
import TodoFilter from './components/todoFilter';

import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <TodoFilter />
      </div>
    )
  }
}

export default App
