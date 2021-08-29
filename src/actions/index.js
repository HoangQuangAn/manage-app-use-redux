import * as type from "../constants/ActionTypes"

export const list_all=()=>{
    return{
        type:type.LIST_ALL
    }
}

export const close_form=()=>{
    return{
        type:type.CLOSE_FORM
    }
}

export const open_form=(ObjNull)=>{
    return{
        type:type.OPEN_FORM,
        ObjNull:{
            id:'',
            name:'',
            status:true
        }
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
export const save_task=(task)=>{
    return{
        type:type.SAVE_TASK,
        task
    }
}
export const update_task_button=(task)=>{
    return{
        type:type.UPDATE_TASK_BUTTON,
        task
    }
}
export const filter_task=(filter)=>{
    return{
        type:type.FILTER_TABLE,
        filter
    }
}
    