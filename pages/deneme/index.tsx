import React from 'react'

export default function Deneme() {
    return (
        <div className='flex flex-col w-full h-full min-h-screen items-center justify-center'>
            <h1 className='text-4xl font-bold'>Deneme</h1>
            <iframe
                src="https://player.twitch.tv/?channel=purplebixi&parent=streamernews.example.com&muted=true"
                height="720"
                width="1280"
                allowFullScreen>
            </iframe>
            <iframe
                src="https://www.youtube.com/embed/SqHIO2zhxbA"
                height="720"
                width="1280"
                allowFullScreen>
            </iframe>
        </div>
    )
}