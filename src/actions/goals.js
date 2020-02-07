import API from "goals-todos-api";
// Bring all of our constants
export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";

// Add action creators
function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}
export function handleDeleteGoal(goal) {
  return dispatch => {
    dispatch(removeGoal(goal.id));
    return API.deleteGoal(goal.id).catch(() => {
      dispatch(addGoal(goal));
    });
  };
}

export function handleAddGoal(name, cb) {
  return dispatch => {
    return API.saveGoal(name)
      .then(goal => {
        dispatch(addGoal(goal));
        // invoke callback function
        cb();
      })
      .catch(() => alert("There was an error. Try again."));
  };
}
