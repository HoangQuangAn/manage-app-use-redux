import { Component } from 'react';
import TaskItemm from './TaskItem';
import { connect } from 'react-redux';
import { filter_task } from '../actions';


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

    SearchHandle=(event)=>{
        var name = event.target.name;
        var value= event.target.value;
        var filter ={
            name: name==='filterName'?value:this.state.filterName,
            status: name==='filterStatus'?value:this.state.filterStatus
        }
        this.props.OnFilterTable(filter);
        this.setState({
            [name]:value
        })
        
    }

  
    render(){
        var {tasks}=this.props;
        var {filterName, filterStatus}= this.state;
        var filter=this.props.filterTable;

        if(filter){
            if(filter.name){
                tasks=tasks.filter((task)=>{
                     return  task.name.toLowerCase().indexOf(filter.name.toLowerCase())!==-1
                })
            }
                tasks=tasks.filter((task)=>{
                    if(filter.status ===-1) {
                        return task
                    }
                    else{
                        return task.status===(filter.status===1 ? true: false);
                    }
                })
        }

        var {keyWord}=this.props;
        if(keyWord){
            tasks=tasks.filter((task)=>{
                return  task.name.toLowerCase().indexOf(keyWord.toLowerCase())!==-1
           })
        }

        var elmTasks=tasks.map((task, index)=>{
            return(
                <TaskItemm 
                    key={task.id}
                    index={index}
                    task={task}
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
        tasks:state.tasks,
        filterTable:state.filterTable,
        keyWord:state.search
    }
};

const mapDispatchToProps=(dispatch,props)=>{
    return{
        OnFilterTable:(filter)=>{
            dispatch(filter_task(filter));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
