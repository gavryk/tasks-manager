import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import tasksGroup from "./tasksGroup";

const rootReducer = combineReducers({
  tasksGroup,
  form: formReducer,
});

export default rootReducer;
