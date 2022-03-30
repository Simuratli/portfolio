import React from 'react'
import { useDispatch } from 'react-redux'
import { setCursorText, setCursorVariant } from '../../redux/actions'

function Connect() {
    const dispatch = useDispatch();

    const projectEnter = () => {
        dispatch(setCursorText("Copy"))
        dispatch(setCursorVariant("project"))
    }

    const projectLeave = () => {
        dispatch(setCursorText(""))
        dispatch(setCursorVariant("default"))
    }


    const copy = () => {
        navigator.clipboard.writeText("simuratli@gmail.com")
        dispatch(setCursorText("Copied"))
    }



    return (
        <section className='connect' >
            <div className="connect__container">
                <h5 className="connect__heading" >Want to connect with me ?</h5>
                <h1 className="connect__mail" onClick={copy} onMouseEnter={projectEnter} onMouseLeave={projectLeave}>SIMURALI@GMAIL.COM</h1>
            </div>
        </section>
    )
}

export default React.memo(Connect)