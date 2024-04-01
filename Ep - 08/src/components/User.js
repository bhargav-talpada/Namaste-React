import { useState } from "react";

const User = (props) => {
    const {name, location, contact, email} = props;
    const [count, setCount] = useState(1)
    const [count1, setCount1] = useState(2)
    return(
        <div className="user-card">
            <h3>Count : {count}</h3>
            <h3>Count1 : {count1}</h3>
            <button onClick={()=>{setCount(count + 1), setCount1(count1 + 2)}}>Count</button>
            <h1>Name : {name}</h1>
            <h3>Location : {location}</h3>
            <h3>Contact : {contact}</h3>
            <h3>Email : {email}</h3>
        </div>
    )
}

export default User;