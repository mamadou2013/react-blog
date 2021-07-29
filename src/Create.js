import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = ()=>{
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('sow');
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title,content,author};
         fetch('http://localhost:8000/blogs',{
             method:'POST',
             headers:{'Content-Type':'application/json'},
             body:JSON.stringify(blog)
         })
         .then(()=>{
            console.log('blog added successfully!');
            history.push('/');
         })
    }
    return (
        <div className="create">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>blog title</label>
                <input
                    type="text"
                    value={title}
                    required
                    onChange={(e)=>setTitle(e.target.value)}
                    >
                </input>
                <label>blog content</label>
                <textarea
                    value={content} 
                    required
                    onChange={(e)=>setContent(e.target.value)}
                    >
                </textarea>
                <label>blog title</label>
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                 >
                    <option value="sow">sow</option>
                    <option value="diallo">diallo</option>
                </select>
                <button>Add blog</button>
                {/* <p>{title}</p>
                <p>{content}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
}

export default Create;