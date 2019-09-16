import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input 
                    type="text" 
                    value={this.props.searchField} 
                    onChange={this.props.handleChange}
                />               
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default SearchBar;