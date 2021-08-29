import { combineReducers } from "redux";
import tasks from './tasks'
import form from './form'
import itemEditing from './itemEditing'
import filterTable from './filterTable'
import search from './search'
const myReducer= combineReducers({
    tasks, // tasks:tasks
    form,
    itemEditing,
    filterTable,
    search
})
export default myReducer;