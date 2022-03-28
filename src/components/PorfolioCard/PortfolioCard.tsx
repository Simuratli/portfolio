import React from 'react'

function PortfolioCard() {
  return (
    <div className='portfolio-card'>
        <time>September 24.2020</time>
        <div className='portfolio-card-content'>
            <h1>Copy Bad Design vs. Good Design: 5 Examples We can Learn From</h1>
            <div className="portfolio-card-tags">
                <span className="tag">#Web</span>
                <span className="tag">#Design Thinking</span>
                <span className="tag">#Usability</span>
            </div>
        </div>
    </div>
  )
}

export default React.memo(PortfolioCard)