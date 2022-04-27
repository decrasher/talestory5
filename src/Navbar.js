import React, {Component} from 'react';
import './Navbar.css';
class Navbar extends Component{
    render(){return(
        <body>
        <nav className='navbar'>
           <div className='logo'>
              <a href="http://localhost:3000">TaleStory</a>
           </div>
           <ul className='menu'>
              <li><a href="http://localhost:3000/AboutUs">About</a></li>
              <li><a href="http://localhost:3000/Products">Proudcts</a></li>
              <li><a href="http://localhost:3000/Cart">Cart</a></li>
              <li><a href="http://localhost:3000/Customer">Customer</a></li>
              <li><a href="http://localhost:3000/Login">login</a></li>
           </ul>
        </nav>
        </body>
    )
    };
   
    

};
export default Navbar;
