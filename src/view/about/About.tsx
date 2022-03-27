import { Heading } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { PortableText } from '@portabletext/react'
import { useEffect } from 'react'
import { fetchAbout } from '../../client/api'
import { getAboutData } from '../../redux/actions'

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

            <div className='about-content'>
                <PortableText
                    value={aboutState && aboutState.description}
                />
            </div>
        </section>
    )
}

export default About