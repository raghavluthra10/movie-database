import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className='navbarContainer'>

            <div>
                <ul className='navbar_navItems'>
                        <li className='navbar_listItems'>
                            <Link to='/watchlist'>Watch List</Link>
                        </li>

                        <li className='navbar_listItems'>
                            <Link to='/watched'>Watched</Link>
                        </li>      
                </ul>
            </div>
            
            <div className='navbar_navItems'>
                <Link to='/'>Home</Link>
            </div>
            
        </div>
    )
}

export default Navbar
