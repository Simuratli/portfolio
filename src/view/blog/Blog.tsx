import { BlogCard, Heading } from '../../components'


function Blog() {
    return (
        <div className='blog'>

            
            <Heading title="Blog" haveCategory={true}/>


            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    )
}

export default Blog