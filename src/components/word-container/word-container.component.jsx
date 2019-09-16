import React from 'react';

// import WordInformation from '../word-information/word-information.component';
// import WordToolbar from '../word-toolbar/word-toolbar.component';
// import SearchBar from '../searchbar/searchbar.component';

class WordContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            word: '',
            rhymes: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            searchField: event.target.value
        })      
      }    
    
    handleSubmit(event) {
        event.preventDefault();        
        this.setState({
            word: this.state.searchField
        }, () => {
        fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${this.state.word}`)
        .then(response => response.json())
        .then(response => {
            this.setState({ rhymes: response});
            console.log(this.state.rhymes)
        })})     
    }    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        value={this.searchField} 
                        onChange={this.handleChange}
                    />               
                    <input type="submit" value="Submit" />
                </form>                
                <h1>{`Word: ${this.state.word}`}</h1>  
                {this.state.rhymes.map(element => {      
                    return <span>{`${element.word}, `}</span>
                })}      
            </div>
        )
    }
}

export default WordContainer;

// {this.props.data.map(element => {              
//     return <span>{`${element.word}, `}</span>
// })}