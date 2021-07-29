import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = ()=>{

    const {data:blogs,isPending, error}= useFetch('http://localhost:8000/blogs');
    const [name, setName] = useState('diallo');
    //let name = 'Mamadou Sow';
    // const [name, setName] = useState('Mamadou Sow');
    // const [age, setAge] = useState(25);

    // const handleClick = ()=>{
    //     setName('aissatou sow');
    //     setAge(35);
    // }

    // const handleClickAgain = (name)=>{
    //     console.log('hello, '+name);
    // }
    // const handlDelete = (id)=>{
    //     const newBlog = blogs.filter(blog=> blog.id !== id);
    //     setBlog(newBlog);
    // }

    // useEffect(()=>{
    //     console.log('use effect ran');
    //     console.log(name);
    // },[name]);

   

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div> }
           {/* {blogs && <BlogList blogs={blogs} title="All blogs" handlDelete={handlDelete} />}  */}
           {blogs && <BlogList blogs={blogs} title="All blogs" />} 
            {/* <button onClick={()=>setName('barry')}>change blog</button>
            <p>{name}</p> */}
            {/* <p>hello {name} you are {age}</p>
            <button onClick={handleClick}>click me</button> */}
            {/* <button onClick={()=>handleClickAgain('mamadou')}>click me again</button> */}
        </div>
    );
}

export default Home;