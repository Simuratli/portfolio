import React, { useEffect, useState, useCallback, useRef } from 'react'
import { fetchAbout } from '../../client/api'
import { useDispatch } from 'react-redux'
import { getAboutData } from '../../redux/actions'
import Ticker from 'react-ticker'
import { motion } from "framer-motion";
import { container, item } from './home.animations'
import { tickerData } from './home.data'
import { Connect } from '../../components'
import { setCursorText, setCursorVariant, setCursorImage } from '../../redux/actions'

function Home() {
  const dispatch = useDispatch()
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


  const projectEnter = () => {
    dispatch(setCursorText(""))
    dispatch(setCursorImage("https://avatars.githubusercontent.com/u/44237641?v=4"))
    dispatch(setCursorVariant("image"))
  }

  const projectLeave = () => {
    dispatch(setCursorText(""))
    dispatch(setCursorImage(""))
    dispatch(setCursorVariant("default"))
  }


  return (
    <section className='home' >
      <div className="home__main">

        <motion.h1 onMouseEnter={projectEnter} onMouseLeave={projectLeave} className='home__main__name' variants={container} initial="hidden" animate="visible"  >
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

      <Connect />

    </section>
  )
}

export default React.memo(Home)