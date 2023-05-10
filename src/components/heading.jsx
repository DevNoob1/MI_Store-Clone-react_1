import React from 'react'
import '../style/heading.css'

function heading({ text }) {
    return (
        <div className='heading'>
            <div></div>
            <p>{text}</p>
            <div></div>
        </div>
    )
}

export default heading
