import react , {useState} from 'react';
import MDEditor from '@uiw/react-md-editor';


function MarkdownEditor(){
    const [markdown , setMarkdown ] = useState("Welcome to Markdown Editor")
    document.documentElement.setAttribute('data-color-mode', 'light')
    return( 
        <div className="Mardown-main">
            <MDEditor className="Markdown-editor" value={markdown} onChange={setMarkdown} preview={'live'} fullscreen={true}/>
                <div className="Markdown-text ">
            </div>
        </div>
       
    )
}

export default MarkdownEditor;