import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodoAction } from '../actions';

const mapDispatchToProps = (dispatch) => {
  const text = '';
  return {
    addTodo: e => {
      e.preventDefault();
      dispatch(addTodoAction(text));
    }
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: e => {
//       e.preventDefault()
//       if (!input.value.trim()) {
//         return
//       }
//       dispatch(addTodoAction(input.value))
//       input.value = ''
//     }
//     // addTodo: (e) => {
//     //   const text = '';
//     //   e.preventDefault();
//     //   console.log(e);
//     //   dispatch(addTodoAction(text));
//     // }
//   }
// }

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value })
    console.log(this.state.input);
  }

  render() {
    return (
      <form className="add__container" onSubmit={this.props.addTodo}>
        <input
          onChange={this.handleInputChange}
        ></input>
        <button type="submit"> Add Todo</button>
      </form >
    )
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)
