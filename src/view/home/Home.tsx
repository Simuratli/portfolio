import Me from '../../assets/home/me.jpg'

function Home() {
  return (
    <section className='home'>
        <img className='me' src={Me} alt="Eljan Simuratli" />
        <h1>Hello. I'm Simuratli Eljan</h1>
        <h5>Front-end developer</h5>
    </section>  
  )
}

export default Home