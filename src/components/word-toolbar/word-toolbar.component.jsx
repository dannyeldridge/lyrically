import React from 'react';

import SearchBar from '../searchbar/searchbar.component';

class WordToolbar extends React.Component {
    render() {
        return (
            <div>
                <SearchBar 
                    handleSubmit={this.props.handleSubmit}
                    handleChange={this.props.handleChange}
                    searchField={this.props.searchField}
                />
            </div>
        )
    }
}

export default WordToolbar;