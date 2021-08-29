
import * as types from '../constants/ActionTypes'

var itemEditing={
    id:'',
    name:'',
    status:true
};

var myReducer=(state=itemEditing, action)=>{
    switch (action.type) {
        case types.UPDATE_TASK_BUTTON:
            return action.task;
        case types.OPEN_FORM:
            state=action.ObjNull;
            return state;
        default:
            return state;
    }
}

export default myReducer;