import React,{ useEffect, useState, useCallback } from 'react'
import { fetchAbout } from '../../client/api'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutData } from '../../redux/actions'
import Ticker from 'react-ticker'
import { motion } from "framer-motion";
import { container, item } from './home.animations'
import { tickerData } from './home.data'

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
        <motion.h1 variants={container} initial="hidden" animate="visible"  >
          <motion.span variants={item}>Eljan</motion.span>
          <br />
          <motion.span variants={item}>Simuratli.</motion.span>
        </motion.h1>

        <Ticker move={!isHover} speed={5}>
          {() => (
            <div className='ticker__item'>
              {
                tickerData.map((text) => {
                  return <p onMouseOver={onMouseEnter} onMouseLeave={onMouseLeave} className="ticker__text"> {text} <span className="dot"></span></p>
                })
              }
            </div>
          )}
        </Ticker>
      </div>



    </section>
  )
}

export default React.memo(Home)