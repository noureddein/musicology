import React from 'react';
import '../Components/styles/sectionTitle.css'

const SectionTitle = ({ title, paragraph }) => {
    return (
        <>
            <div className='title'>
                <h2>{title.toUpperCase()}</h2>
                <p>{paragraph}</p>
            </div>
        </>
    );
}

export default SectionTitle;