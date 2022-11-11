import {useState} from 'react' 
import {marked} from 'marked'
import './App.css';
import { FaFreeCodeCamp } from "react-icons/fa"
import {FaExpandArrowsAlt} from "react-icons/fa"

function App() {
  const [Text , setText] = useState(`
  # H1

  ## H2

  [title](https://www.example.com)
  \`code\`

  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`


  - First item
- Second item
- Third item

> blockquote

![alt text](image.jpg)

**bold text**
**bold text**
**bold text**

  `)

marked.setOptions({
  breaks: true
})

  return (
    <div className="App">

      <div className='editorWrap'>
           <div className='toolbar'>
          <FaFreeCodeCamp/>
                Editor
          <FaExpandArrowsAlt className='fa-arrows-alt'/>                              
               
                
           </div>
           <textarea id ="editor" onChange={(event)=>{
           setText(event.target.value)
       }} value={Text}></textarea>
      </div>


    <div  className='convetor'></div> 



      <div  className='previewWrap'>
      <div className='toolbar'>
      <FaFreeCodeCamp/>
                Previwer
                <FaExpandArrowsAlt className='fa-arrows-alt'/>
      </div>
      <div id ="preview" 
      dangerouslySetInnerHTML={{
        __html: marked(Text),
       }}
      ></div>

       </div>
     
     
    </div>
  );
}

export default App;
