import FacebookImage from '../../assets/footer/facebook.svg'
import TwitterImage from '../../assets/footer/twitter.svg'
import LinkedinImage from '../../assets/footer/linkedin.svg'
import GoogleImage from '../../assets/footer/google.svg'

function Footer() {
  return (
    <footer>
      <div className="social">
        <img src={TwitterImage} alt="Twitter" />
        <img src={FacebookImage} alt="Twitter" />
        <img src={GoogleImage} alt="Twitter" />
        <img src={LinkedinImage} alt="Twitter" />
      </div>
      <div className='divider'>
        <span className="circle"></span>
      </div>
      <div className="belong">Created by <span>Simuratli Eljan |</span> <a href="/">Privacy</a></div>
    </footer>
  )
}

export default Footer