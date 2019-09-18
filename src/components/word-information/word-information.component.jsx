import React from 'react';

class WordInformation extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h3>{`Perfect rhymes:`}</h3>  
                </div>
                <div>
                    {this.props.perfectRhymes.map(element => {      
                        return <span>{`${element.word}, `}</span>
                    })}             
                </div>
                <div>
                    <h3>{`Near rhymes:`}</h3>  
                </div>
                <div>
                    {this.props.nearRhymes.map(element => {      
                        return <span>{`${element.word}, `}</span>
                    })}             
                </div>
            </div>
        )
    }
}

export default WordInformation;


