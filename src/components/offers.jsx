import React from 'react'
import data from '../data/data.json'
import '../style/offer.css'

export default function offers({ offers }) {
    return (
        <div className='offersSection'>
            {
                offers.map((item) => (
                    <a href={item.url}><img src={item.image} alt="" /></a>
                ))
            }
        </div>
    )
}
