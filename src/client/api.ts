import sanityClient, { urlFor } from '../client'

export const fetchAbout = async () => {

    let aboutData = await sanityClient.fetch(`*[_type == "about"]`)
    aboutData = {
        ...aboutData[0],
        mainImage:urlFor(aboutData[0].mainImage)
    }
    return aboutData
}