import { Link } from 'react-router-dom'
import React from 'react'
import { BlogCardPropTypes } from './blogCard.types'

function BlogCard({ name, category, time, slug }: BlogCardPropTypes) {
    return (
        <div className='blog-card'>
            <div className="blog-card-content">
                <Link to={`/blog/${slug}`}>
                    <h1 className='blog-card-heading'>{name} <span className="blog-card-heading-category">{category.map((item) => `#${item}`)}</span></h1>
                </Link>
                <time className="blog-card-time">{time}</time>
            </div>
            <span className="blog-card-category">{category.map((item) => ` #${item}`)}</span>
        </div>
    )
}

export default React.memo(BlogCard)