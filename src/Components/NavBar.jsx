import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import './styles/navbar.css'
const searchIcon = 'assets/search.webp';
const logo = 'assets/logo.webp';

const header = ['home', 'products', 'promo', 'about', 'contact']


function NavBar() {
    const [search, setSearch] = useState(false)
    return (
        <div className='navBarContainer'>
            <div className='logoImgContainer'>
                <img className='logoImg' src={logo} alt="Logo" />
            </div>
            <>
                {/* <div>
                    <ul className='navigationTitle'>

                        {
                            header.map(item => <li key={item}><NavLink className='navLink' to='/'>{item.toUpperCase()}</NavLink></li>)
                        }
                    </ul>
                </div> */}
                <div className='search-sec'>
                    <input type="text" className={search ? 'isSearchClicked' : ''} placeholder='Search...' />
                    <img className='searchIcon' onClick={() => setSearch(!search)} src={searchIcon} alt="Search Icon" />
                </div>
            </>
        </div>
    );
}

export default NavBar;