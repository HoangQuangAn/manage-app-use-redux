import * as types from '../constants/ActionTypes'

var data= JSON.parse(localStorage.getItem('tasks'));

var initialState= data?data:[];

var generateID=()=>{
    var randomstring = require("randomstring");
    return randomstring.generate();
}


var myReducer=(state=initialState, action)=>{
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        
        case types.ADD_TASK:
            console.log(action);
            var {task}=action;
            var newTask={
                id:generateID(),
                name:task.name,
                status:task.status
            }
            state.push(newTask);
            localStorage.setItem("tasks",JSON.stringify(state));
            return [...state];
      
        default:
            return state;
            break;
    }
}

export default myReducer;