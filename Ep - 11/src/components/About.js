import User from './User'
import UserClass from './UserClass';

const About = () => {
    return(
        <div>
            <h1 className='m-4 p-4 text-2xl'>About</h1>
            <User name="Bhargav" location="Rajkot, Gujarat, India" contact="72039 13274" email="bhargavtalpada2004@gmail.com" />
            <UserClass name="Bhargav Talpada" location="Rajkot, Gujarat, India" contact="72039 13274" email="bhargavtalpada2004@gmail.com"   />
        </div>
    )
}

export default About;