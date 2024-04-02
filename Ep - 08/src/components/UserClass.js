import React from 'react';

class UserClass extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            count: 1,
            count1: 2,
        }
        console.log(this.props.name + 'Constructor');
    }

    componentDidMount(){
        console.log(this.props.name + 'component did mount');
    }

    render(){
        const {name, location, contact, email} = this.props;
        const {count, count1} = this.state;
        console.log(this.props.name + 'Render');
        return(
            <div className="user-card">
                <h3>Count : {count}</h3>
                <h3>Count1 : {count1}</h3>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                        count1: this.state.count1 + 2
                    })
                }}>Count</button>
                <h1>Name : {name}</h1>
                <h3>Location : {location}</h3>
                <h3>Contact : {contact}</h3>
                <h3>Email : {email}</h3>
            </div>
        )
    }
}

export default UserClass;