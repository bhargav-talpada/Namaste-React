import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div className="user-card">
                <h1>Name : {this.props.name}</h1>
                <h3>Location : {this.props.location}</h3>
                <h3>Contact : {this.props.contact}</h3>
                <h3>Email : {this.props.email}</h3>
            </div>
        )
    }
}

export default UserClass;