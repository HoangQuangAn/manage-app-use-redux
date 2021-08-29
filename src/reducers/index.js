import { combineReducers } from "redux";
import tasks from './tasks'
import form from './form'
import itemEditing from './itemEditing'
const myReducer= combineReducers({
    tasks, // tasks:tasks
    form,
    itemEditing
})
export default myReducer;