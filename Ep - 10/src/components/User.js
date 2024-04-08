import { useEffect, useState } from "react";
import useUserData from "../utils/useUserData";

const User = (props) => {
    // const {name, location, contact, email} = props;
    
    const userData = useUserData();
    
    const {name, location, contact, email} = userData;
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