
import { Component } from 'react';

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            name:'',
            status:true
      
        }
    }
    onCloseForm=()=>{
        this.props.onCloseForm();
    }

    onHandleInput=(event)=>{
            var name =event.target.name;
            var value = event.target.value;
            if(name==='status'){
                value= event.target.value==="false"?false:true;
            }
            this.setState({ 
                [name]:value
            })
    }

    Clear=()=>{
        this.setState({
            name:'',
            status:true
        })
    }

    onSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.Clear();
    }
    componentWillMount(){
        var {taskEditing}= this.props;
        if(taskEditing){
            this.setState({
                id:taskEditing.id,
                name:taskEditing.name,
                status:taskEditing.status
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.taskEditing){
            this.setState({
                id:nextProps.taskEditing.id,
                name:nextProps.taskEditing.name,
                status:nextProps.taskEditing.status
            })
        }
        else{
            this.setState({
                id:'',
                name:'',
                status:true
            })
        }
    }
    render(){
        var {id}=this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id===''?"Thêm Công Việc": "Thay Đổi Công Việc"} 
                        <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}>

                        </span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Name: </label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="name" 
                                value={this.state.name}
                                onChange={this.onHandleInput}/>
                        </div>                       
                        
                        <label htmlFor="">Status: </label>
                        <select 
                            name="status" 
                            id="input"
                             className="form-control" 
                             required="required"
                             value={this.state.status}
                             onChange={this.onHandleInput} >
                            <option value={true}>Active</option>
                            <option value={false}>Hide</option>
                        </select>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success">
                                <i className="fas fa-plus-circle"></i> Save
                            </button>
                                &nbsp;
                                &nbsp;
                                &nbsp;
                            <button type="button" className="btn btn-danger" onClick={this.Clear}>
                                <i className="fas fa-times-circle"></i> Cancle
                            </button>
                            
                            
                        </div>
                    </form>
                    
                </div>
            </div>
        );
    }
}

export default TaskForm;
