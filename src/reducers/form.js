import * as types from '../constants/ActionTypes'
var isDisplayForm = false;
 var myReducer = (state= isDisplayForm, action)=>{
    switch (action.type) {
        case types.CLOSE_FORM:
            return false;
        case types.OPEN_FORM:
            return true;
         case types.SAVE_TASK:
            if (action.task.id==='') {
               return false
            }
            return true;  
        default:
           return state;
    }
 }

 export default myReducer; 