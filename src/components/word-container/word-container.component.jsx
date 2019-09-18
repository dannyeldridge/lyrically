import React from 'react';
import SearchBar from '../searchbar/searchbar.component';
import WordInformation from '../word-information/word-information.component';

const datamuse = require('datamuse');

class WordContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            word: '',
            perfectRhymes: [],
            nearRhymes: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            searchField: event.target.value
        }, () => {
            console.log(this.state.searchField)
        })      
      }    
    
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ word: this.state.searchField }, 
            () => {
            Promise.all([
                datamuse.request(`words?rel_rhy=${this.state.word}`),
                datamuse.request(`words?rel_nry=${this.state.word}`) 
            ])
            .then(([json1, json2]) => this.setState({
                perfectRhymes: json1,
                nearRhymes: json2
            }))
        })
    }  

    render() {
        return (
            <div>
                <SearchBar 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    searchField={this.searchField}
                />               
                <WordInformation
                    word={this.state.word}
                    perfectRhymes={this.state.perfectRhymes}
                    nearRhymes={this.state.nearRhymes}
                />
            </div>
        )
    }
}

export default WordContainer;
