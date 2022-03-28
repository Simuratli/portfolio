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

      <div className="home__main">
        <h1>
          Eljan
          <br />
          Simuratli
        </h1>

        <Ticker move={!isHover} speed={5}>
          {() => (
            <div className='ticker__item'>
              <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text"> front-end developer </p>
              {/* <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text"> <span className="dot"></span></p> */}
              <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text">anime lover </p>
              {/* <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text"> <span className="dot"></span></p> */}
              <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text">junior graphic designer </p>
              {/* <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text"> <span className="dot"></span></p> */}
            </div>
          )}
        </Ticker>
      </div>

    </section>
  )
}

export default Home