
import { Component } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions';

class Search extends Component {
    constructor(props){
        super(props);
        this.state={
            SearchText:''
        }
    }
 
    onChange=(event)=>{
        this.setState({
            SearchText:event.target.value
        })
    }

    onSearch=()=>{
        this.props.Search(this.state.SearchText)
    }
    render(){

        return (
            <>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> 
                    <div className="input-group">
                        <input 
                            type="text" 
                            name="keyword" 
                            className="form-control a " 
                            placeholder="Enter Keyword..."
                            onChange={this.onChange}
                            />
                        
                        <span className="input-group-btn">
                            <button 
                                type="button" 
                                className="btn btn-primary"
                                onClick={this.onSearch}
                                > 
                                <i className="far fa-search"></i> Search
                            </button>
                        </span>
                        
                    </div>       
                </div>     
            </>
            
        );
        }
}
const mapStateToProps=state=>{
    return{
        
    }
}


const mapDispatchToProps=(dispatch,props)=>{
    return{
        Search:(keyword)=>{
            dispatch(search(keyword))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
