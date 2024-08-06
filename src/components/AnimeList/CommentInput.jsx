"use client"

import { useRouter } from "next/navigation"
import React, { useState } from "react"

const CommentInput = ({ 
        anime_mal_id, 
        user_email, 
        username, 
        anime_title 
    }) => {
    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)

    const router = useRouter();

    const handleInput = (event) => {
        setComment(event.target.value)
    }

    const handlePosting = async (event) => {
        event.preventDefault()
        
        const data = { 
            anime_mal_id, 
            user_email, 
            comment, 
            username,
            anime_title
        }

        const response = await fetch("/api/v1/comment", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const sendComment = await response.json()
        if (sendComment.isCreated) {
            setIsCreated(true)
            setComment("")
            router.refresh()
        }
        return

    }

    return (
        <div className="gap-2">
            {
                isCreated && <p className="text-color-primary">Terkirim...</p>
            }
            <textarea 
                onChange={handleInput} 
                value={comment}
                className="rounded w-full h-32 text-xl p-2"/>
            <button onClick={handlePosting} className="rounded py-2 px-3 bg-color-accent">Kirim</button>
        </div>
    )
}

export default CommentInput