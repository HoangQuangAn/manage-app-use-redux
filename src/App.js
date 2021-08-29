
import './App.css';
import { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as types from './constants/ActionTypes'
import { close_form, open_form } from './actions';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            filter:{
                name:'',
                status:-1
            },
            keyWord:'',
            sortBy:'',
            sortValue : 1    
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
    }

    render(){
        var {
            sortBy,
            sortValue
        }= this.state;
        var {DisPlayForm}= this.props;
       
        // if(filter){
        //     if(filter.name){
        //         tasks=tasks.filter((task)=>{
        //              return  task.name.toLowerCase().indexOf(filter.name.toLowerCase())!==-1
        //         })
        //     }
        //         // tasks=tasks.filter((task)=>{
        //         //     if(filter.status ===-1) {
        //         //         return task
        //         //     }
        //         //     else{
        //         //         return task.status===(filter.status===1 ? true: false);
        //         //     }
        //         // })
        // }

        // if(keyWord ){
        //     tasks=tasks.filter((task)=>{
        //         return  task.name.toLowerCase().indexOf(keyWord.toLowerCase())!==-1
        //    })
        // }

        // if(sortBy==='name'){
        //     tasks.sort((a,b)=>{
        //         if(a.name>b.name) return sortValue;
        //         else if (a.name<b.name) return -sortValue ;
        //         else return 0;
        //     })
        // }else{
        //     tasks.sort((a,b)=>{
        //         if(a.status>b.status) return -sortValue;
        //         else if (a.status<b.status) return sortValue ;
        //         else return 0;
        //     })

        // }

        var elmTaskForm=DisPlayForm===true? <TaskForm/>:'';
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
                    <div className={DisPlayForm===true?"col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                        <button type="button" className="btn btn-primary" 
                            onClick={this.props.OnOpenForm}>
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

const mapStateToProps = state=>{
    return{
        DisPlayForm: state.form
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        OnOpenForm:({})=>{
            dispatch(open_form({}))
        }
     
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(App);
