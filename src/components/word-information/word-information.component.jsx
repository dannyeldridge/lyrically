import React from 'react';

class WordInformation extends React.Component {
    render() {
        return (
            <div>
                <h1>{`Word: ${this.props.word}`}</h1>              
            </div>
        )
    }
}

export default WordInformation;

// {this.props.data.map(element => {              
//     return <span>{`${element.word}, `}</span>
// })}