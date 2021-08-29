import { combineReducers } from "redux";
import tasks from './tasks'
import form from './form'
import itemEditing from './itemEditing'
import filterTable from './filterTable'
const myReducer= combineReducers({
    tasks, // tasks:tasks
    form,
    itemEditing,
    filterTable
})
export default myReducer;