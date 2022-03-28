import FacebookImage from '../../assets/footer/github.png'
import TwitterImage from '../../assets/footer/twitter.svg'
import LinkedinImage from '../../assets/footer/linkedin.svg'
import GoogleImage from '../../assets/footer/google.svg'
import { useSelector } from 'react-redux'
import React from 'react'

function Footer() {

  const aboutState = useSelector((state: any) => state.aboutReducer)


  return (
    <footer>
      <div className="social">
        <a target="_blank" rel="noreferrer" href={aboutState && aboutState.twitter}><img src={TwitterImage} alt="Twitter" /></a>
        <a target="_blank" rel="noreferrer" href={aboutState && aboutState.Github}><img width={20} src={FacebookImage} alt="Twitter" /></a>
        <a target="_blank" rel="noreferrer" href={aboutState && `mailto:${aboutState.google}`}><img src={GoogleImage} alt="Twitter" /></a>
        <a target="_blank" rel="noreferrer" href={aboutState && aboutState.linkedin}><img src={LinkedinImage} alt="Twitter" /></a>
      </div>
      <div className='divider'>
        <span className="circle"></span>
      </div>
      <div className="belong">Created by <span>Simuratli Eljan |</span> <a href="/">Privacy</a></div>
    </footer>
  )
}

export default React.memo(Footer)