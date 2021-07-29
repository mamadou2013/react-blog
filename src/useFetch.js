import {useEffect, useState} from 'react';

const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending]=useState(true);
    //error handling property
    const [error, setError]=useState(null);

    useEffect(()=>{
        fetch(url)
            .then(result=>{
                //console.log(result);
                if(!result.ok){
                    setIsPending(false);
                    throw Error('could not fetch data from that resource');
                }else{
                    return result.json();
                } 
            })
            .then(data =>{
                setError(null);
                setData(data);
                setIsPending(false);
            })
            .catch(err=>{
               setError(err.message);
            })
            return ()=>console.log('clean up');
    },[url]);

    return {data, isPending, error};
}

export default useFetch;