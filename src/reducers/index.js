import { combineReducers } from "redux";
import tasks from './tasks'
import form from './form'
const myReducer= combineReducers({
    tasks, // tasks:tasks
    form
})
export default myReducer;