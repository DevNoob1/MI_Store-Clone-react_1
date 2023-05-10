import React from 'react'
import VideoCard from "./VideoCard.jsx"
import "../style/Videos.css"



const Videos = ({ videos }) => {
    return (
        <div className="videos">
            {
                videos.map((item) => (
                    <>
                        <VideoCard image={item.image} name={item.name} />
                    </>
                ))
            }
        </div>

    )
}

export default Videos