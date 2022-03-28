import { Link } from 'react-router-dom'
import React from 'react'

function BlogCard() {
    return (
        <div className='blog-card'>
            <div className="blog-card-content">
                <Link to="/blog/1">
                    <h1 className='blog-card-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit nisl. <span className="blog-card-heading-category">#Visual</span></h1>
                </Link>
                <time className="blog-card-time">DEC 23, 2020</time>
            </div>
            <span className="blog-card-category">Visual</span>
        </div>
    )
}

export default React.memo(BlogCard)