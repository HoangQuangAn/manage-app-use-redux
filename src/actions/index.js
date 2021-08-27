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
export const close_form=()=>{
    return{
        type:type.CLOSE_FORM
    }
}
export const toggle_form=()=>{
    return{
        type:type.TOGGLE_FORM
    }
}
export const open_form=()=>{
    return{
        type:type.OPEN_FORM
    }
}
export const update_status_task=(id)=>{
    return{
        type:type.UPDATE_STATUS_TASK,
        id
    }
}
export const delete_task=(id)=>{
    return{
        type:type.DELETE_TASK,
        id
    }
}
