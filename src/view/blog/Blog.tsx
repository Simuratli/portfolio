import React, { useEffect, useState } from 'react';
import { BlogCard, Heading } from '../../components'
import { fetchBlogs } from '../../client/api'
import { BlogsApiTypes } from '../../client/api.types'
import { Helmet } from "react-helmet";

function Blog() {
    const [blogs, setblogs] = useState<BlogsApiTypes[]>([])

    useEffect(() => {
        fetchBlogs().then((data) => setblogs(data))
    }, [])


    return (
        <div className='blog'>
            <Helmet>
                <title>Blog Posts</title>
                <meta property="og:title" content="Simuratli Eljan Blog Posts" />
                <meta property="og:type" content="Simuratli Eljan Blog Posts" />
                <meta property="og:url" content="https://simuratli.vercel.app/blog" />
                <meta property="og:image" content="hhttps://imgur.com/a/WMe4A41" />
                <meta name="twitter:title" content="Simuratli Eljan Blog Posts" />
                <meta name="twitter:description" content="Simuratli Eljan Blog Posts" />
                <meta name="twitter:image" content="https://imgur.com/a/WMe4A41" />
                <meta name="twitter:card" content="https://imgur.com/a/WMe4A41" />
            </Helmet>

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