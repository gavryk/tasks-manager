import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import tasksGroup from "./tasksGroup";
import tasks from './tasks';

const rootReducer = combineReducers({
  tasksGroup,
  form: formReducer,
  tasks
});

export default rootReducer;
