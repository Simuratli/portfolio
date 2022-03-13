import { PorfolioCard, Heading } from '../../components'

function Portfolio() {
    return (
        <section className='portfolio'>
            <Heading title="Portfolio" haveCategory={false} />
            <PorfolioCard />
            <PorfolioCard />
            <PorfolioCard />
            <PorfolioCard />
        </section>
    )
}

export default Portfolio