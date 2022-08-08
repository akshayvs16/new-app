import React,{useState,useEffect} from 'react'


function Counter() {
    const [count,setCount] = useState(0)

    useEffect(()=>{
    console.log('Mounting...');
    
        console.log('Unmounting...'+count);
    return(()=>{
        console.log("Cleanup"+count);
    })

    },[count])

    
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}><h3>increment</h3></button>
        <h1>You Clicked : {count} times</h1>
        <div>
  
  </div>
    </div>
  )
}

export default Counter