import React, { useEffect, useState } from 'react';
import { BlogCard, Heading } from '../../components'
import { fetchBlogs } from '../../client/api'
import { BlogsApiTypes } from '../../client/api.types'


function Blog() {
    const [blogs, setblogs] = useState<BlogsApiTypes[]>([])

    useEffect(() => {
        fetchBlogs().then((data) => setblogs(data))
    }, [])


    return (
        <div className='blog'>


            <Heading title="Blog" haveCategory={false} />

            {
                blogs.map((item) => {
                    return <BlogCard name={item.name} category={item.category} time={item._createdAt} slug={item.slug.current} key={item.name} />
                })
            }
        </div>
    )
}

export default Blog