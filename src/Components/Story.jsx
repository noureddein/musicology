import React from 'react';
import StoryImgs from '../Common/StoryImgs';
import SectionTitle from '../Common/SectionTitle';
import './styles/story.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. '

function Story() {



    return (
        <div className='storyContainer'>
            <div className="container">
                <SectionTitle title='Dance Tour' paragraph={paragraph} />
                <div className='danceTourCards animate' id='danceTourCards'>
                    <StoryImgs />
                </div>
            </div>
        </div>
    );
}

export default Story;