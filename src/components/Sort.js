
import { Component } from 'react';

class Sort extends Component {
    constructor(props){
        super(props);
        this.state=({
            sort:{
                by:'name',
                value:1
            }
        })
    }
    componentWillReceiveProps(nextProps){
        // console.log(nextProps);
    }
    onClick=(sortBy, sortValue)=>{
        
        this.props.onSort(sortBy, sortValue)
    }
    render(){
        var {sort}= this.state;
        var {sortBy, sortValue}= this.props;
        return (
            <>  
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="dropdown">
                        <button 
                            type="button" 
                            className="btn btn-primary dropdown-toggle "
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                            id="dropdownMenu1"
                            >Sort <i className="fal fa-sort-size-up-alt"></i> 
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li onClick={()=>this.onClick('name', 1)}>
                                <a 
                                    role="button"
                                    className={sortBy==='name' && sortValue===1?"sort_selected": ""} 
                                    >
                                    <i className="fas fa-sort-alpha-up"></i> Name A-Z
                                </a>
                            </li>
                            <li onClick={()=>this.onClick('name', -1)}>
                                <a 
                                    role="button" 
                                    className={sortBy==='name' && sortValue===-1?"sort_selected": ""}
                                >
                                    <i className="fas fa-sort-alpha-up-alt"></i> Name Z-A
                                </a>
                            </li>
                            <hr/>
                            <li onClick={()=>this.onClick('status', 1)}>
                                <a 
                                    role="button"
                                    className={sortBy==='status' && sortValue===1?"sort_selected": ""}
                                >
                                    Active Status
                                </a>
                            </li>
                            <li onClick={()=>this.onClick('status', -1)}>
                                <a 
                                    role="button"
                                    className={sortBy==='status' && sortValue===-1?"sort_selected": ""} 
                                >
                                    Hide Status
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
            
        );
    }
}

export default Sort;
