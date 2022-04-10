import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import '../styles/Navbar/Navbar.css';
import { FiMenu, FiX } from "react-icons/fi";
import { MdHome, MdAssignment } from "react-icons/md";

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    console.log(sidebar);

    return (
        <>

            <header className='navbar'>
                <div className="navbar_container">
                    <a href='#' className='button_toggle'>
                        <FiMenu className='text-light' onClick={showSidebar} />
                    </a>
                    <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1649563332/Varios/calendario_pncpzm.png" alt="logo" />
                    <span>Agenda de citas</span>
                    <div className="ms-auto">

                        <Button variant='danger'>Salir</Button>
                    </div>
                </div>
            </header>

            <nav className={sidebar ? 'nav_menu active' : 'nav_menu'}>
                <ul className='nav_menu_items'>
                    <li id='navbar_toggle' onClick={showSidebar}>
                        <a href='#' className='menu_bars'>
                            <FiX className='text-light' />
                        </a>
                    </li>

                    <li className='item'>
                        <a href='/' className='menu_bars'>
                            <MdHome className='me-2'/>
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li className='item'>
                        <a href='/citas' className='menu_bars'>
                            <MdAssignment className='me-2'/>
                            <span>Citas</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar