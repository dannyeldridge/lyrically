import React, { useState } from 'react';

import {Editor, EditorState, RichUtils } from 'draft-js';
import { DraftailEditor, BLOCK_TYPE } from "draftail"

import '../../../node_modules/draft-js/dist/Draft.css'

const SongEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
  
    return (
      <div className="song-editor">
        <DraftailEditor
          editorState={editorState}
          onChange={setEditorState}
          blockTypes={[
            { type: BLOCK_TYPE.HEADER_THREE },
            { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
          ]}
        />
      </div>
    )
}

export default SongEditor;