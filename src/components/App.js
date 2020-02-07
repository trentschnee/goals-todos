import React from "react";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Todos";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    //when the state changes, re-render this specific component and child componenets, updating the UI
    dispatch(handleInitialData());
  }
  render() {
    if (this.props.loading) {
      return <h3> loading </h3>;
    }
    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

// Custom API for Consumer. When we invoke connect, it will return us a new function which we can then invoke with the second params (App)
//this is why we pass down the state of the store because we can use it on the App component
export default connect(state => ({
  loading: state.loading
}))(App);
