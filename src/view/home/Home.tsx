import { useEffect } from 'react'
import { fetchAbout } from '../../client/api'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutData } from '../../redux/actions'

function Home() {
  const dispatch = useDispatch()
  const aboutState = useSelector((state:any)=>state.aboutReducer)

  useEffect(() => {
    fetchAbout()
      .then((data) => {
        dispatch(getAboutData(data))
      })
  }, [])



  return (
    <section className='home'>
      <img className='me' src={aboutState && aboutState.mainImage} alt="Eljan Simuratli" />
      <h1>Hello. I'm {aboutState && aboutState.name}</h1>
      <h5>{aboutState && aboutState.speciality}</h5>
    </section>
  )
}

export default Home