import React from 'react';
import { NavLink } from 'react-router-dom'
import '../Components/styles/footer.css'

const FooterColumns = ({ columns }) => {
    return (
        <>
            {
                columns.map((item, idx) => <div className={item.title} key={idx}>
                    <h6>{item.title.toUpperCase()}</h6>
                    <ul>
                        {item.list.map((list, idx) => <li key={idx}><NavLink to='/'>{list}</NavLink></li>)}
                    </ul>
                </div>)
            }

        </>
    );
}

export default FooterColumns;