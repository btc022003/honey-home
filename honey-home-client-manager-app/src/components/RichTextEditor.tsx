import type { ReactElement } from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
import type { EditorState } from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';

interface Props {
  editorState: EditorState;
  setEditorState: any;
}

function RichTextEditor({ editorState, setEditorState }: Props): ReactElement {
  const handleEditorChange = (v: EditorState) => {
    setEditorState(v);
  };
  return (
    <>
      <BraftEditor
        style={{ border: '1px solid', borderColor: 'rgba(0, 0, 0, 0.5)' }}
        value={editorState}
        onChange={(e) => handleEditorChange(e)}
      />
    </>
  );
}

export default RichTextEditor;
