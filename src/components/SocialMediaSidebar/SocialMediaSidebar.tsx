import React from 'react'
import { icons } from './SocialIcons.data'

function SocialMediaSidebar() {
    return (
        <div className="social__networks__sidebar">
            {
                icons.map((svg) => {
                    return <a href="/" dangerouslySetInnerHTML={{ __html: svg }}></a>
                })
            }

        </div>
    )
}

export default React.memo(SocialMediaSidebar)