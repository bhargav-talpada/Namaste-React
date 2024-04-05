import { useEffect, useState } from "react";

const User = (props) => {
    const {name, location, contact, email} = props;
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("functional component");
        }, 1000);
        console.log('useeffect');
        return()=>{
            clearInterval(timer);
            console.log('useeffect return');
        }
    },[])
    console.log('render');
    return(
        <div className="user-card">
            <h1>Name : {name}</h1>
            <h3>Location : {location}</h3>
            <h3>Contact : {contact}</h3>
            <h3>Email : {email}</h3>
        </div>
    )
}

export default User;