import React from 'react';

import './main-container.styles.scss'

import WordContainer from '../word-container/word-container.component';
import SongEditor from '../song-editor/song-editor.component';

class MainContainer extends React.Component {
    render() {
        return (
            <div>
                <div className='main-container'>
                    <SongEditor />
                    <WordContainer />                    
                </div>
            </div>
        )
    }
}

export default MainContainer;