import { ADD_TODO } from "../actions/todos";
import { ADD_GOAL } from "../actions/goals";
//passed a store as the first argument, then it will return another function called next, next will be the nest function we have in the middleware or it's going to dispatch
const checker = store => next => action => {
  console.log(action);
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope. That's a bad idea.");
  }
  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().includes("bitcoin")
  ) {
    return alert("Nope. That's a bad idea.");
  }
  return next(action);
  //next will be the next middleware in line or dispatch the action
};
