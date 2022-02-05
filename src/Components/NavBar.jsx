import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom'
import './styles/navbar.css'
const searchIcon = 'assets/search.webp';
const logo = 'assets/logo.webp';

const header = ['home', 'products', 'promo', 'about', 'contact']


function NavBar() {
    const [search, setSearch] = useState(false)
    const navList = useRef()
    function handleNavigation() {
        navList.current.classList.toggle('navIsVisible')
    }
    return (
        <div className='navBarContainer'>
            <div className='logoImgContainer'>
                <img className='logoImg' src={logo} alt="Logo" />
            </div>
            <div className='navListsSearchContainer'>
                <div className="menuIcon" onClick={handleNavigation}>
                    <i className="fas fa-bars" ></i>
                </div>
                <div className='navigationTitleContainer'  >
                    <ul className='navigationTitle' ref={navList}>
                        {
                            header.map(item => <li key={item}><NavLink className='navLink' to='/'>{item.toUpperCase()}</NavLink></li>)
                        }
                    </ul>
                </div>
                <div className='search-sec'>
                    <input type="text" className={search ? 'isSearchClicked' : null} placeholder='Search...' />
                    <img className='searchIcon' onClick={() => setSearch(!search)} src={searchIcon} alt="Search Icon" />
                </div>
            </div>
        </div>
    );
}

export default NavBar;