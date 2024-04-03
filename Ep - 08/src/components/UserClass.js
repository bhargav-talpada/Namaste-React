import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log("Constructor");
        this.state = {
            userInfo:{
                name: "dummuy",
                location: "no",
                email: "bhargav@gmail.com",
                contact: "7203913274",
            }
        }
    }

    async componentDidMount(){
        const gitUser = await fetch("https://api.github.com/users/Bhuro11");
        const json = await gitUser.json();
        this.setState({
            userInfo: json,
        })
        console.log(json);
    }
    componentDidUpdate(){
        console.log("ComponentDidUpdate");
    }
    componentWillUnmount(){
        console.log("componentwillunmount");
    }
    render(){
        // const { contact, email} = this.props;
        const {name, location , contact, email} = this.state.userInfo;
        console.log("Render");
        return(
            <div className="user-card">
                <h1>Name : {name}</h1>
                <h3>Location : {location}</h3>
                <h3>Contact : {contact}</h3>
                <h3>Email : {email}</h3>
            </div>
        )
    }
}

export default UserClass;