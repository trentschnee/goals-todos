import React from "react";
import { connect } from "react-redux";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from "../actions/todos";
import List from "./List";
class Todos extends React.Component {
  addItem = e => {
    //receive an event and then use the preventDefault
    e.preventDefault();
    this.props.dispatch(handleAddTodo(this.input.value), () => {
      this.input.value = "";
    });
  };
  removeItem = todo => {
    this.props.dispatch(handleDeleteTodo(todo));
  };
  toggleItem = todoID => {
    this.props.dispatch(handleToggle(todoID));
  };
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {
          // this.input will have all the details we need from the input from the ref
        }
        <input
          type="text"
          placeholder="Add Todo"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}> Add Todo </button>
        <List
          toggle={this.toggleItem}
          remove={this.removeItem}
          items={this.props.todos}
        />
      </div>
    );
  }
}
export default connect(state => ({
  todos: state.todos
}))(Todos);
