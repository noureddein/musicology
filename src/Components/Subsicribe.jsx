import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import './styles/subscribe.css'
import 'react-bootstrap'
const paragraph = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur doloribus ut eveniet iste nobis eaque doloremque! Dolore commodi, asperiores ea quisquam iste inventore fugiat beatae corporis eveniet, quos earum fuga';


const Subscribe = () => {
    return (
        <>
            <div className='subscribeContainer'>
                <div>
                    <SectionTitle title={'Subscribe'} paragraph={paragraph} />
                </div>
                <div>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span className="input-group-text" id="basic-addon2">SUBSCRIBE</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Subscribe;