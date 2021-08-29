import { Component } from 'react';
import { connect } from 'react-redux';
import { delete_task, update_status_task,close_form, open_form, save_task, update_task_button } from '../actions';

class TaskItemm extends Component {
  
    onUpdateStatus=()=>{
        this.props.UpdateStatus( this.props.task.id)
    }
    
    onDeleteItem=()=>{
        this.props.DeleteItem(this.props.task.id);
        this.props.OnCloseForm();
    }

    onUpdateTask=()=>{
        this.props.OnOpenForm();
        this.props.OnUpdateTaskButton(this.props.task)
    }
    
    render(){
        var {task, index}=this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={task.status===true?"label label-success spanStatus":"label label-danger spanStatus" }
                        onClick={this.onUpdateStatus}
                        
                        >{task.status===true?"Active" : "Hide"}</span>
                </td>
                <td className="text-center">
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            onClick={this.onUpdateTask}> 
                            <i className="far fa-pen-square"></i> Update
                        </button>
                            &nbsp;
                            &nbsp;
                            &nbsp;
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={this.onDeleteItem}>
                            <i className="fas fa-trash-alt"></i> Delete
                        </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps=state=>{
    return{
        
    }
}

const mapDispatchToProps=(dispatch,props)=>{
    return{
        UpdateStatus:(id)=>{
            dispatch(update_status_task(id))
        },
        DeleteItem:(id)=>{
            dispatch(delete_task(id))
        },
        OnCloseForm:()=>{
            dispatch(close_form())
        },
        OnOpenForm:()=>{
            dispatch(open_form())
        },
        OnUpdateTaskButton:(task)=>{
            dispatch(update_task_button(task))
        },
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItemm);
