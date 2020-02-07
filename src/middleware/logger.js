// make a new mdidleware called logger
const logger = store => next => action => {
  console.group(action.type);
  console.log("The action:", action);

  //invoke the action
  const result = next(action);
  console.log("The new state:", store.getState());
  console.groupEnd();
  return result;
};
export default logger;
