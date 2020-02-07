import API from "goals-todos-api";
// Bring all of our constants
export const RECEIVE_DATA = "RECEIVE_DATA";
// Add action creators
function receiveData(todos, goals) {
  return { type: RECEIVE_DATA, todos, goals };
}

export function handleInitialData() {
  return dispatch => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      dispatch(receiveData(todos, goals));
    });
  };
}
