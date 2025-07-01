import { useState, useRef, useEffect } from "react"

const songs = [
    {
        name: 'Fade into you',
        imgsrc: './wallpapers/wallpaper1.jpg',
        src: './songs/mazzyStar.mp3'
    },
    {
        name: 'Cinnamon Girl',
        imgsrc: './wallpapers/wallpaper1.jpg',
        src: './songs/cinnamongirl.mp3'
    },
    {
        name: 'Do I wanna know',
        imgsrc: './wallpapers/wallpaper1.jpg',
        src: './songs/doiwannaknow.mp3'
    },
    {
        name: 'Arabella',
        imgsrc: './wallpapers/wallpaper1.jpg',
        src: './songs/arabella.mp3'
    },
    {
        name: 'No.1 Party Anthem',
        imgsrc: './wallpapers/wallpaper1.jpg',
        src: './songs/partyanthem.mp3'
    },
    {
        name: 'Qafirana',
        imgsrc: './wallpapers/wallpaper1.jpg',
        src: './songs/qafirana.mp3'
    },
    {
        name: 'Zara sa',
        imgsrc: './wallpapers/wallpaper1.jpg',
        src: './songs/zarasa.mp3'
    },

]

export default function Music(){

    const audioRef = useRef(null)
    const [currentSong, setCurrentSong] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [volume, setVolume] = useState(1)

  const PlayPause = () => {
    if (!currentSong) return;
    setIsPlaying((prev) => !prev);
    }
    
    const nextSong = () =>{
        if(!currentSong) return
        const currentIndex = songs.findIndex((s) => s.name=== currentSong.name)
        const nextIndex = (currentIndex + 1)% songs.length
        setCurrentSong(songs[nextIndex])
    }

    const prevSong = () => {
        if(!currentSong) return
        const currentIndex = songs.findIndex((s)=> s.name === currentSong.name)
        const prevIndex = (currentIndex - 1 + songs.length )%songs.length
        setCurrentSong(songs[prevIndex])
    }


    const handleProgressClick = (e) =>{
        const rect = e.target.getBoundingClientRect()
        const percent = (e.clientX - rect.left) / rect.width
        audioRef.current.currentTime = percent * audioRef.current.duration
    }

    useEffect(() => {
        const audio = audioRef.current
        if(!audio ) return

        const updateProgress = () =>{
            setProgress((audio.currentTime / audio.duration) * 100 || 0)
        }
        audio.addEventListener('timeupdate', updateProgress)

        return() =>{
            audio.removeEventListener('timeupdate', updateProgress)
        }
    }, [])

    
    useEffect(()=>{
        if(audioRef.current) audioRef.current.volume = volume
    }, [volume])
    
    useEffect(()=>{
        const audio = audioRef.current
        if(!audio) return

        if(isPlaying){
            audio.play().catch(err => console.error("audio play error", err))
        } else{
            audio.pause()
        }
    }, [isPlaying])

    useEffect(()=>{
        const audio = audioRef.current
        if(!audio || !currentSong) return

        audio.src = currentSong.src
        audio.load()
        if(isPlaying){
            audio.play().catch(err => console.error("audio play error",err))
        }
    }, [currentSong])

    return(
        <div className="w-[90%] h-[90%] bg-slate-900 flex flex-col justify-between">
            <audio ref={audioRef} src={currentSong?.src} onEnded={nextSong} />
            <div className="flex flex-wrap justify-center ">
                
                {songs.map((song,idx)=>(
                    <div
                    key={idx}
                    className="w-30 h-10 bg-slate-800 mx-2 my-1 rounded-sm flex items-center hover:opacity-75 active:scale-90 transition-all cursor-pointer" 
                    onClick={()=>{
                        setCurrentSong(song)
                        setIsPlaying(true)
                    }}  
                    >
                        <img className="p-1 w-[50%] " src={song.imgsrc}/>
                        <div className="text-white text-[8px] ">{song.name}</div>
                    </div>
                ))}
            </div>

            <div className="w-full h-12 bg-black px-3 flex justify-between items-center ">
                <div className="text-white flex items-center justify-around w-[30%] ">
                    {currentSong && (
                        <>
                            <img className="h-10" src={currentSong.imgsrc} />
                            <div className="text-sm" >{currentSong.name}</div>
                        </>
                    )}
                </div>
                
                <div className="flex flex-col w-[40%] h-10  justify-around items-center ">
                    <div className="flex w-[50%] justify-around"> 
                        <div className=" w-4 h-6 text-white rotate-180 flex justify-center items-center hover:opacity-75 active:scale-75 transition" onClick={prevSong}  >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 18V6H18V18H16ZM5 18V6L13.5 12L5 18Z"/></svg>
                        </div>
                        <div className=" text-black flex bg-white rounded-full justify-center items-center w-6 h-6 hover:opacity-75 active:scale-75 transition" onClick={PlayPause}  >
                            {isPlaying ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="5" width="4" height="14" fill="currentColor"/><rect x="14" y="5" width="4" height="14" fill="currentColor"/></svg>
                                       : <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5V19L19 12L8 5Z"/></svg>}
                        </div>
                        <div className=" w-4 h-6 text-white flex justify-center items-center hover:opacity-75 active:scale-75 transition" onClick={nextSong}  >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 18V6H18V18H16ZM5 18V6L13.5 12L5 18Z"/></svg>
                        </div>
                    </div>
                    <div className="w-[90%] h-1 bg-gray-700 flex items-center rounded-2xl cursor-pointer " onClick={handleProgressClick}>
                        <div className="h-1 bg-white rounded-2xl  transition-all group-hover:bg-green-400 " style={{width: `${progress}%`}} ></div>
                    </div>
                </div>
                <div className="w-[20%] h-1 bg-gray-700 flex items-center rounded-2xl ">
                    <input 
                    type="range" min={0} max={1} step={0.01} value={volume}  
                    className=" h-1 bg-white rounded-2xl hover:bg-green-400 transition-all"
                    onChange={(e)=> setVolume(parseFloat(e.target.value))}
                    />
                </div>
            </div>
        </div>
    )
}