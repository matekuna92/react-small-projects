import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className='navbar'>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'> My ToDos </NavLink>
                    </li>
                    <li>
                        <NavLink to='/completed'> Completed ToDos </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;