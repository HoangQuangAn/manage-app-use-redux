
import { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    render(){
        var {onSearch, onSort, sortBy, sortValue}= this.props;
            return (
                <>
                   <Search
                       onSearch={onSearch}
                       
                   />
                    <Sort
                        onSort={onSort}
                        sortBy={sortBy}
                        sortValue={sortValue}
                    />
                </>
               
            );
        }
}

export default Control;
