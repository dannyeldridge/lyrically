import React from 'react';

import "../node_modules/draftail/dist/draftail.css"
import '../node_modules/draft-js/dist/Draft.css'
import '../node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css'
import '../node_modules/@blueprintjs/core/lib/css/blueprint.css'

import WordContainer from './components/word-container/word-container.component';

function App() {
  return (
    <div>
      <WordContainer />
    </div>
  );
}

export default App;
