import { useEffect, useState } from "react";

const Contact = () => {
    const [count, setCount] = useState(1)
    const [count1, setCount1] = useState(2)
    useEffect(()=>{
        console.log("count");
    },[count])
    useEffect(()=>{
        console.log("count1");
    },[count1])
    return(
        <div>
            <h1>Contact Us</h1>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count + 1)}}>Count</button>
            <h1>{count1}</h1>
            <button onClick={()=>{setCount1(count1 + 2)}}>Count1</button>
        </div>
    )
}

export default Contact;