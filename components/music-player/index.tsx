import React,{ useState, useRef, useEffect } from 'react'
import { Icon } from '@iconify/react';

const Index: React.FC = () => {
    const audioEl = useRef<any>(null)
    const [isPlaying, setIsPlaying] = useState<any>(true)

    useEffect(() => {
        if(isPlaying){
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    })

  return (
    <>
        <div>
            <audio src="song3.mp3" ref={audioEl}></audio>
            <div className="fixed bottom-4 right-4">
                <button className="flex" onClick={ () => setIsPlaying(!isPlaying) }>
                    <Icon className="h-16 w-16" icon={ isPlaying ? "bi:pause-circle-fill" : "bi:play-circle-fill"} color="#c38e70" />
                </button>
            </div>
        </div>
    </>
  )
}

export default Index