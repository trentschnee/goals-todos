import checker from "./checker";
import logger from "./logger";
import thunk from "./redux-thunk";
import { applyMiddleware } from "react-redux";

export default applyMiddleware(thunk, checker, logger);
