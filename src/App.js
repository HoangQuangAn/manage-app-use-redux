
import './App.css';
import { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/control';
import TaskList from './components/TaskList';
import _ from 'lodash'
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:[],// id : unique, name , status
            isDisplayForm:false,
            taskEditing:null,
            filter:{
                name:'',
                status:-1
            },
            keyWord:'',
            sortBy:'',
            sortValue : 1    
        }
    }

    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks'))
        {
            var tasksLocalStorage = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks:tasksLocalStorage
            });
        }        
    }
    
    generateID=()=>{
        var randomstring = require("randomstring");
        return randomstring.generate();
    }

    ToggleForm=()=>{
        if(this.state.isDisplayForm && this.state.taskEditing!==null){
            this.setState({
                isDisplayForm:true,
                taskEditing:null
            });
        }
        else{
            this.setState({
                isDisplayForm:!this.state.taskEditing,
                taskEditing:null
            })
        }
    }

    onCloseForm=()=>{
        this.setState({
            isDisplayForm:!this.state.isDisplayForm
        })
    }

    onTurnOnForm=()=>{
        this.setState({
            isDisplayForm:true
        })
    }

    onSubmit=(data)=>{
        console.log(data);
        if(data.id===''){
            data.id=this.generateID();
            var {tasks}= this.state;
            tasks.push(data);
                this.setState({
                tasks:tasks
                })
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        else{
            var {tasks}= this.state;
            tasks.forEach((task, index)=>{
                if(task.id===data.id){
                    task.name =data.name;
                    task.status=data.status;
                }
            })

            this.setState({
                tasks:tasks,
                taskEditing:null,
                isDisplayForm:false     
            })
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        
      
        console.log(data);
    }
    
    onUpdateStatus=(id)=>{
        var {tasks}=this.state;
        tasks.forEach((task, index)=>{
            if(task.id===id){
                task.status=!task.status
            }
        });

        this.setState({
            tasks:tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
       
    }


    findIndex=(id)=>{
        var {tasks}= this.state;
        tasks.forEach((task, index)=>{
            if(task.id===id){
                // console.log(index);
                return index;
            }
            else{
                return -1;
            }
        })
    }

    onDeleteItem=(id)=>{
        var {tasks}=this.state;
        for( var i = 0; i < tasks.length; i++){ 
    
            if ( tasks[i].id=== id) { 
        
                tasks.splice(i, 1); 
            }
        }
        this.setState({
            tasks:tasks
        })
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateTask=(id)=>{
        // Turn On Form
        this.onTurnOnForm();
        // Update Form Data;
        this.UpdateDataOnForm(id);

    }

    UpdateDataOnForm=(id)=>{
        var {tasks}= this.state;
        for( var i = 0; i < tasks.length; i++){ 
            if ( tasks[i].id=== id) { 
                this.setState({
                    taskEditing:tasks[i]
                })
            }
        }
    }

    onFilter=(filterName,filterStatus)=>{
        filterStatus=parseInt(filterStatus, 10);
        this.setState({
            filter:{
                name:filterName,
                status:filterStatus
            }
        })
        
    }

    onSearch=(data)=>{
        this.setState({
            keyWord:data
        })
    }

    onSort=(sortBy, sortValue)=>{
        
        this.setState({
            sortBy:sortBy,
            sortValue:sortValue
        })
        console.log(this.state);
    }

    render(){
        var {
            tasks,
            isDisplayForm,
            taskEditing, 
            filter,
            keyWord,
            sortBy,
            sortValue
        }= this.state;
       
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

        if(keyWord ){
            tasks=tasks.filter((task)=>{
                return  task.name.toLowerCase().indexOf(keyWord.toLowerCase())!==-1
           })
        }

        if(sortBy==='name'){
            tasks.sort((a,b)=>{
                if(a.name>b.name) return sortValue;
                else if (a.name<b.name) return -sortValue ;
                else return 0;
            })
        }else{
            tasks.sort((a,b)=>{
                if(a.status>b.status) return -sortValue;
                else if (a.status<b.status) return sortValue ;
                else return 0;
            })

        }

        var elmTaskForm=isDisplayForm===true? <TaskForm 
                                                    taskEditing={taskEditing}
                                                    onCloseForm={this.onCloseForm}
                                                    onSubmit={this.onSubmit}
                                                    />:'';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc </h1>
                </div>
                
                <div className="row mt-25">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {/* Form */}
                        {elmTaskForm}
                    </div>
                    <div className={isDisplayForm===true?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary" 
                            onClick={this.ToggleForm}>
                            <i className="far fa-plus-circle"></i> Add Task
                        </button>
                       
                        {/* Search-Sort */}
                        <div className="row mt-15">   
                            <Control
                                onSearch={this.onSearch}
                                onSort={this.onSort}
                                sortBy={sortBy}
                                sortValue={sortValue}
                            />  
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                                    onUpdateTask={this.onUpdateTask}
                                    onUpdateStatus={this.onUpdateStatus}
                                    tasks={tasks}
                                    onDeleteItem={this.onDeleteItem}
                                    onFilter={this.onFilter}
                                    />
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        );
    }
}

export default App;
