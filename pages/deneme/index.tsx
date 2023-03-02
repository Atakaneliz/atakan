import React from 'react'

export default function Deneme() {
    return (
        <div className='flex flex-col w-full h-full min-h-screen items-center justify-center'>
            <h1 className='text-4xl font-bold'>Deneme</h1>
            <div className='w-full h-full grid grid-cols-2'>
                <iframe
                    src="https://player.twitch.tv/?channel=purplebixi&parent=www.atakaneliz.com"
                    height="720"
                    width="1280"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen={true}>
                </iframe>
                <iframe
                    src="https://player.twitch.tv/?channel=jahrein&parent=www.atakaneliz.com"
                    height="720"
                    width="1280"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen={true}>
                </iframe>
            </div>
        </div>
    )
}
