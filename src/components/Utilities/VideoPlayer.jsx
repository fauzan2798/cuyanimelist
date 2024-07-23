"use client"

import { useState } from "react"

const { default: YouTube } = require("react-youtube")


const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(true);

    const option = {
        width: "300",
        height: "250"
    }

    const handleTrailer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const Trailer = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button 
                    onClick={handleTrailer}
                    className="text-color-primary float-right bg-color-secondary px-3 mb-1">
                    X
                </button>
                <YouTube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Video is broken, please try another.")}
                />
            </div>
        )
    }

    const OpenTrailer = () => {
        return (
            <button 
                className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl rounded hover:bg-color-accent transition-all shadow-xl"
                onClick={handleTrailer}
            >
                Trailer
            </button>
        )
    }

    return isOpen ? <Trailer/> : <OpenTrailer/>
}

export default VideoPlayer