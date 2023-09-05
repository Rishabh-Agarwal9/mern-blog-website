import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { useState } from 'react';
const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

const CreatePost = () => {  
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');

    async function createNewPost(ev){
        const data = new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('file',files[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post',{
            method: 'POST',
            body: data,
        });
        await response.json();
    }
  return (
    <form onSubmit={createNewPost}>
        <input type="title" 
            placeholder='Title' 
            value={title}
            onChange={ev=>{
                setTitle(ev.target.value)
            }}
        />
        <input type="summary" 
            placeholder='Summary' 
            value={summary}
            onChange={ev=>{
                setSummary(ev.target.value)
            }}
        />
        <input 
            type="file"
            onChange={ev=>{
                setFiles(ev.target.files)
            }}
        />
        <ReactQuill 
            value={content} 
            onChange={newVal=>{
                setContent(newVal)
            }}
            modules={modules}/>
        <button style={{marginTop:'5px'}}>Create post!</button>
    </form>
  )
}

export default CreatePost