import React, { Component } from 'react'

export class TodoFilter extends Component {
  render() {
    return (
      <div className="filter__container">
        <a className="filter__link" href="/">All</a>
        <a className="filter__link" href="/">Active</a>
        <a className="filter__link" href="/">Completed</a>
      </div>
    )
  }
}

export default TodoFilter
