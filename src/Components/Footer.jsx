import React from 'react';
import { NavLink } from 'react-router-dom'
import './styles/footer.css'
import FooterColumns from '../Common/footerColums';

const columns = [
    {
        title: 'about',
        list: [
            'History',
            'Our Team',
            'Brand Guidelines',
            'Terms & Condition',
            'Privacy Policy'
        ]
    },
    {
        title: 'services',
        list: [
            'How to Order',
            'Our Product',
            'Order Status',
            'Promo',
            'Payment Method',
        ]
    },
    {
        title: 'other',
        list: [
            'Contact Us',
            'Help',
            'Privacy',
        ]
    }
]


function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className='discretionContainer'>
                        <h4>MUSICOLOGY</h4>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum aliquid culpa non aut! Tenetur, porro id ullam ex labore, omnis, illo consequuntur quam totam sint at cumque perspiciatis nesciunt aliquam?
                        </p>
                        <div className="socialMediaIcons">
                            <NavLink to='/'><i className="fab fa-facebook"></i></NavLink>
                            <NavLink to='/'><i className="fab fa-whatsapp"></i></NavLink>
                            <NavLink to='/'><i className="fab fa-instagram"></i></NavLink>
                            <NavLink to='/'><i className="fab fa-twitter"></i></NavLink>
                        </div>
                    </div>
                    <FooterColumns columns={columns} />
                </div>
            </footer>
        </>
    );
}

export default Footer;