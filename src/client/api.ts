import sanityClient, { urlFor } from '../client'

export const fetchAbout = async () => {

    let aboutData = await sanityClient.fetch(`*[_type == "about"]`)
    aboutData = {
        ...aboutData[0],
        mainImage: urlFor(aboutData[0].mainImage)
    }
    return aboutData
}



export const fetchProjects = async () => {
    const query = '*[ _type == "projects"]'
    const properties = await sanityClient.fetch(query)

    return properties
}


export const fetchBlogs = async () => {
    const query = '*[ _type == "blog"]'
    const properties = await sanityClient.fetch(query)
    return properties
}



export const fetchIndividualBlog = async (id:string | undefined) => {
    // const query = `*[ _type == "blog" && ${id}]`

    const pageSlug = id
    const query = `*[ _type == "blog" && slug.current == $pageSlug][0]`
    

      const property = await sanityClient.fetch(query, { pageSlug })

    console.log(property,'ppppp')
    return property
}