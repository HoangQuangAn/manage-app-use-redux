import { Component } from 'react';
import TaskItemm from './TaskItem';
import { connect } from 'react-redux';

class TaskList extends Component {
    constructor(props){
        super(props);
        this.state={
            filterName:'',
            filterStatus:-1 //all: -1
                            // Active: 1
                            // Hide : 0
        }
    }
    onUpdateStatus=(id)=>{
        this.props.onUpdateStatus(id);
    }

    SearchHandle=(event)=>{
        var name = event.target.name;
        var value= event.target.value;

        this.props.onFilter(
            name==='filterName'?value:this.state.filterName,
            name==='filterStatus'?value:this.state.filterStatus
        )
        this.setState({
            [name]:value
        })
        
    }

  
    render(){
        var {tasks}=this.props;
        var {filterName, filterStatus}= this.state;
        var elmTasks=tasks.map((task, index)=>{
            return(
                <TaskItemm 
                    key={task.id}
                    index={index}
                    task={task} 
                    onUpdateStatus={this.onUpdateStatus} 
                    onDeleteItem={this.props.onDeleteItem}
                    onUpdateTask={this.props.onUpdateTask}
                />
            )
        });
        return (
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">Name</th>
                        <th className="text-center">Status</th>
                        <th className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="text" 
                                name="filterName"
                                className="form-control" 
                                value={filterName}
                                onChange={this.SearchHandle}
                                />
                        </td>
                        <td>
                            <select 
                                name="filterStatus"
                                className="form-control"
                                value={filterStatus}
                                onChange={this.SearchHandle} >
                                    <option value={-1}>All</option>
                                    <option value={0}>Hide</option>
                                    <option value={1}>Active</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elmTasks}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        tasks:state.tasks
    }
};

export default connect(mapStateToProps,null)(TaskList);
