import React from 'react';
import { InputGroup } from "@blueprintjs/core";

class SearchBar extends React.Component {
    render() { 
        return (
            <form onSubmit={this.props.handleSubmit}>
                <InputGroup 
                    type="search" 
                    value={this.props.searchField} 
                    onChange={this.props.handleChange}
                    placeholder={'Enter a word'}
                    leftIcon="search"  
                />
            </form>
        )
    }
}

export default SearchBar;
