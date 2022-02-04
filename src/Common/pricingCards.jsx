import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/styles/pricingCards.css'

const prices = [
    {
        title: 'basic',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$150.00'
    },
    {
        title: 'professional',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$200.00'
    },
    {

        title: 'ultimate',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: '$250.00'
    }
]

function PricingCards() {

    return (
        <>
            <div id='pricingCardsContainer' className='pricingCardsContainer animate'>
                {
                    prices.map((item, idx) => <Card key={idx} style={{ width: '18rem' }} className='pricingCardContainer'>
                        <Card.Img variant="top" src='../assets/star.png' />
                        <Card.Body className='card-body-pricing'>
                            <Card.Title>{item.title.toUpperCase()}</Card.Title>
                            <Card.Text>{item.paragraph}</Card.Text>
                            <button className='priceBtn'>{item.price}</button>
                        </Card.Body>
                    </Card>)
                }
            </div>
        </>
    );
}

export default PricingCards;