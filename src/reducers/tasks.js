import * as types from '../constants/ActionTypes'

var data= JSON.parse(localStorage.getItem('tasks'));

var initialState= data?data:[];


var generateID=()=>{
    var randomstring = require("randomstring");
    return randomstring.generate();
}

var findIndex=(tasks,id)=>{
    var result=-1;
    tasks.forEach((task, index)=>{
        if(task.id===id){
            result= index;
        }
    })
    return result;
}


var myReducer=(state=initialState, action)=>{
        
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        
        case types.SAVE_TASK:
            var {task}=action;
            var newTask={
                id:task.id,    
                name:task.name,
                status:task.status
            }
            if (!action.task.id) {
                newTask.id=generateID();
                state.push(newTask);
            }
            else{
                var index= findIndex(state,action.task.id);
                state[index]=newTask;
            }   
            localStorage.setItem("tasks",JSON.stringify(state));
            return [...state];
      
        case types.UPDATE_STATUS_TASK:
            var index= findIndex(state,action.id);
            state[index]={
                ...state[index],
                status:!state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state];

        case types.DELETE_TASK:
            var index= findIndex(state,action.id);
            state.splice(index,1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}

export default myReducer;