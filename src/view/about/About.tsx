import { Heading } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { PortableText } from '@portabletext/react';
import { useEffect } from 'react';
import { fetchAbout } from '../../client/api';
import { getAboutData } from '../../redux/actions';
import { Helmet } from "react-helmet";


function About() {
    const dispatch = useDispatch()
    const aboutState = useSelector((state: any) => state.aboutReducer)

    useEffect(() => {
        fetchAbout()
            .then((data) => {
                dispatch(getAboutData(data))
            })
    }, [])


    return (
        <section className='about'>
            <Heading title="About" haveCategory={false} />
            <Helmet>
                <title>About Simuratli Eljan</title>
                <meta property="og:title" content="About Simuratli Eljan" />
                <meta property="og:type" content="about page" />
                <meta property="og:url" content="https://simuratli.vercel.app/about" />
                <meta property="og:image" content="https://i.imgur.com/XKG6XBP.png" />

                <meta name="twitter:title" content="About Simuratli Eljan" />
                <meta name="twitter:description" content="About Simuratli Eljan." />
                <meta name="twitter:image" content="https://i.imgur.com/XKG6XBP.png" />
                <meta name="twitter:card" content="https://i.imgur.com/XKG6XBP.png" />

            </Helmet>

            <div className='about-content'>
                <PortableText
                    value={aboutState && aboutState.description}
                />
            </div>
        </section>
    )
}

export default About