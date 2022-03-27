import { HeadingPropTypes } from './heading.types'
import React from 'react'

function Heading({ title, haveCategory }:HeadingPropTypes) {
    return (
        <div className="head">
            <h1 className="head-title">{title}</h1>
            {
                haveCategory && <div className="head-categories">
                    <span className="head-categories-category">Front-end</span>
                    <span className="head-categories-category">Code</span>
                    <span className="head-categories-category">History</span>
                    <span className="head-categories-category active">Books</span>
                </div>
            }
        </div>
    )
}

export default React.memo(Heading)