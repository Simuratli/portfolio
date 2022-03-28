import { useEffect, useState, useCallback } from 'react'
import { fetchAbout } from '../../client/api'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutData } from '../../redux/actions'
import Ticker from 'react-ticker'

function Home() {
  const dispatch = useDispatch()
  const aboutState = useSelector((state: any) => state.aboutReducer)
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    fetchAbout()
      .then((data) => {
        dispatch(getAboutData(data))
      })
  }, [])


  let onMouseLeave = useCallback(
    () => {
      setIsHover(false)
    },
    [],
  )

  let onMouseEnter = useCallback(
    () => {
      setIsHover(true)
    },
    [],
  )
  

  return (
    <section className='home'>
      {/* <img className='me' src={aboutState && aboutState.mainImage} alt="Eljan Simuratli" />
      <h1>Hello. I'm {aboutState && aboutState.name}</h1>
      <h5>{aboutState && aboutState.speciality}</h5> */}
      <h1>
        Eljan
        <br />
        Simuratli
      </h1>

      <Ticker move={!isHover} speed={5}>
        {() => (
          <div className='ticker__item'>
            <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text"> front-end developer </p>
            <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text"> <span className="dot"></span></p>
            <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text">anime lover </p>
            <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text"> <span className="dot"></span></p>
            <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text">junior graphic designer </p>
            <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text"> <span className="dot"></span></p>
          </div>
        )}
      </Ticker>

    </section>
  )
  }

  export default Home