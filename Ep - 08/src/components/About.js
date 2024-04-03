import User from './User'
import UserClass from './UserClass';

const About = () => {
    return(
        <div>
            <h1>About</h1>
            {/* <User name="Bhargav Talpada" location="Rajkot, Gujarat, India" contact="72039 13274" email="bhargavtalpada2004@gmail.com" /> */}
            <UserClass name="Bhargav Talpada" location="Rajkot, Gujarat, India" contact="72039 13274" email="bhargavtalpada2004@gmail.com"   />
        </div>
    )
}

export default About;