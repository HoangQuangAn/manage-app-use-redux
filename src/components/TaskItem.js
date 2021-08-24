

import { Component } from 'react';

class TaskItemm extends Component {
  
    onUpdateStatus=()=>{
        this.props.onUpdateStatus( this.props.task.id)
    }
    
    onDeleteItem=()=>{
        this.props.onDeleteItem(this.props.task.id)
    }

    onUpdateTask=()=>{
        this.props.onUpdateTask(this.props.task.id)
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

export default TaskItemm;
