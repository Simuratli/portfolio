import React, { useEffect, useState, useRef } from 'react';
import { Loader } from '../../components'
import { useParams } from 'react-router-dom';
import { fetchIndividualBlog } from '../../client/api'
import { IndividualBlogApiType } from '../../client/api.types'
import { PortableText } from '@portabletext/react';
import { urlFor } from '../../client'
import { Helmet } from "react-helmet";
import Canvas, { test } from "../../utils/opengraph.util";

function BlogContent() {
    const [blogData, setblogData] = useState<IndividualBlogApiType>({
        category: ['Loading..', 'Loading..'],
        description: 'test',
        name: "Loading...",
        tags: ['Loading..', 'Loading..']
    })

    const [loader, setloader] = useState(true)

    const params = useParams()

    useEffect(() => {
        console.log(params, 'params')
        fetchIndividualBlog(params.id).then((data) => setblogData(data))
        setloader(false)
        console.log(test, 'canvas')
    }, [])



  


    return (
        <div className='blog-content'>
            <Canvas name={blogData.name} src={blogData.mainImage && urlFor(blogData.mainImage)} />
            {/* <canvas id="canvas" ref={canvas} width={1200} height={630} /> */}
            <Helmet>
                <title>{blogData.name} </title>
                <meta property="og:title" content={blogData.name} />
                <meta property="og:type" content={blogData.name} />
                <meta property="og:url" content={`https://simuratli.vercel.app/blog/${blogData.slug?.current}`} />
                <meta property="og:image" content={test} />
                <meta name="twitter:title" content={blogData.name} />
                <meta name="twitter:description" content={blogData.description} />
                <meta name="twitter:image" content={test} />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <div className="blog-content-left">
                <h1 className='blog-content-heading'>{blogData.name}</h1>
                <img id="image" className='blog-content-heading-image' src={blogData.mainImage && urlFor(blogData.mainImage)} alt="" />
                <div className='blog-content-text'>
                    <PortableText
                        value={blogData.description}
                    />
                </div>
            </div>
            {loader && <Loader />}
            <div className="blog-content-right">
                <div className='blog-content-right-item'>
                    <h5>Categories</h5>
                    {blogData.category.map((cat) => <p>{cat}</p>)}
                </div>

                <div className='blog-content-right-item'>
                    <h5>Tags</h5>
                    <div className="tags">
                        {blogData.tags && blogData.tags.map((tag) => <span>#{tag}</span>)}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default React.memo(BlogContent)