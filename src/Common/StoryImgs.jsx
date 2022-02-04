import React from 'react';
import { Card } from 'react-bootstrap';
import '../Components/styles/story.css';

function StoryImgs() {
    const imgPath = '../assets/story_imgs/';
    const imgs = ['img1.webp', 'img2.webp', 'img3.webp']
    const cardTitle = ['america', 'asia', 'australia']

    return (
        <>
            {
                imgs.map((img, idx) =>
                    <Card key={idx} >
                        <Card.Img variant="top" src={imgPath + '/' + img} />
                        <Card.Body >
                            <Card.Title>{cardTitle[idx].toUpperCase()}</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }

        </>
    );
}



export default StoryImgs;

