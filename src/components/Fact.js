import React from 'react'
import './Fact.css'

const Fact = ({ randomFact }) => {

    return (
        <div className='fact'>
            {randomFact.text}
        </div>
    )
}

export default Fact