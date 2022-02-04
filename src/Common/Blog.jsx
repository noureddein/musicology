import React from 'react';
import '../Components/styles/blog.css'


const Blog = ({ img, title, subTitle, blogNum }) => {
    return (
        <>
            <div className="container">
                <div className={`blogContainer ${blogNum}`}>
                    <div className={`blogImgContainer-${blogNum}`}>
                        <img src={img} alt={blogNum} />
                    </div>
                    <div className={`articleContainer-${blogNum}`}>
                        <h3>{title.toUpperCase()}</h3>
                        <p>{subTitle}</p>
                        <button>READ MORE</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;