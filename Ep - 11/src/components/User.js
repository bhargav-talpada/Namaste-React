import useUserData from "../utils/useUserData";

const User = (props) => {
    // const {name, location, contact, email} = props;
    
    const userData = useUserData();
    
    const {name, location, contact, email} = userData;
    return(
        <div className="user-card m-4 p-4 w-60 text-xl bg-gray-200">
            <h1>Name : {name}</h1>
            <h3>Location : {location}</h3>
            <h3>Contact : {contact}</h3>
            <h3>Email : {email}</h3>
        </div>
    )
}

export default User;