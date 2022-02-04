import React from 'react';
import Blog from '../Common/Blog';

const blogsData = {
    blog1: {
        title: 'amazing dance',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
        imgPath: './assets/story_imgs/img2.png'
    },
    blog2: {
        title: 'best dance',
        subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
        imgPath: './assets/story_imgs/img1.png'
    }
}

function Blogs() {
    const { blog1, blog2 } = blogsData
    return (
        <div className='blogsContainer'>
            <Blog
                img={blog1.imgPath}
                title={blog1.title}
                subTitle={blog1.subTitle}
                blogNum='blog1'
            />
            <Blog
                img={blog2.imgPath}
                title={blog2.title}
                subTitle={blog2.subTitle}
                blogNum='blog2'
            />
        </div>
    );
}

export default Blogs;