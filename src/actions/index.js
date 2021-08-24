import * as type from "../constants/ActionTypes"

export const list_all=()=>{
    return{
        type:type.LIST_ALL
    }
}

export const add_task=(task)=>{
    return{
        type:type.ADD_TASK,
        task
    }
}
