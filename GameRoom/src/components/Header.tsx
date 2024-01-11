
import { Link } from 'react-router-dom';
import '../css/home.css'
const Header = () => {
   
    return (
     
      <nav className='topbar'>
          <li>
            <Link to='/'>Home</Link>           
          </li>
          <li>
            <Link to='/register'>Register</Link>               
          </li>
          <li>
            <Link to='/login'>Login</Link>      
          </li>
      </nav> 
     
    )
  };
  export default Header;