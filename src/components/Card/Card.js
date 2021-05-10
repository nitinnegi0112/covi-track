import React from 'react'
import './Card.css'
const Card = ({id,today,cases}) => {
const formatCases = (cases)=>{
    const changed = cases.toLocaleString();
    return changed;
}

    return (
        <div className={`card ${id}`}>
            <h1 className='card__heading'>{id}</h1>
            <h2 className='card__cases'>{formatCases(cases)}</h2>
            <h3 className='card__today'>{today?`Increase: ${formatCases(today)}`:''} <span>{today?<i className='bx bx-up-arrow-alt'></i>:''}</span></h3>
        </div>
    )
}

export default Card
