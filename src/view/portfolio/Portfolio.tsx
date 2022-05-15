import React, { useEffect, useState } from 'react'
import { ImageCard, Heading } from '../../components';
import { fetchProjects } from '../../client/api'
import { ProjectsApiTypes } from '../../client/api.types';
import {urlFor} from '../../client'

function Portfolio() {
    const [projects, setprojects] = useState<ProjectsApiTypes[]>([])

    useEffect(() => {
        fetchProjects().then((data) => setprojects(data))
    }, [])


    return (
        <section className='portfolio'>
            <Heading title="Portfolio" haveCategory={false} />
            {
                projects.length !== 0 && projects.map((item) => {
                    return <ImageCard key={item.name} test={item.test} description={item.description} title={item.name} image={urlFor(item.images)}  />
                })
            }

        </section>
    )
}

export default Portfolio