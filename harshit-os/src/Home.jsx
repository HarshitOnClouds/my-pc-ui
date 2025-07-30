// right click disable kr dena baad mai
import { useState } from "react";
import BottomBar from "./BottomBar";
import Window from "./Window";
import Win from "./win";


export default function Home(){

    function Shortcuts(props){
        return(
            <div className="px-1 py-3 w-15  flex flex-col justify-center items-center rounded-sm hover:bg-slate-900" onDoubleClick={ ()=> AppOpener(props.name)}>
                <img className="w-15 mb-1" src={props.src}/>
                <div className="w-15 h-2  text-center text-white font-black text-[8px] break-words" >{props.name}</div>
            </div>
        )
    }

    const [open,setOpen] = useState(false)
    const [tab, setTab] =useState('')
    


    function AppOpener(name){
        setTab(name)        
        setOpen(true)

}


    return(
        <div className=" h-screen" >
                <div className="relative w-full h-full overflow-hidden ">
                    <div className="inset-0 absolute bg-cover bg-center bg-[url('/wallpapers/wallpaper1.jpg')] "></div>

                    <div className="relative h-[93%] p-2 flex justify-between">
                        <div className="flex">
                        <div className="mr-2" >
                        <Shortcuts src={'/icons/yt.png'} name='Youtube' />
                        <Shortcuts src={'/icons/calculator.webp'} name='Calculator' />
                        <Shortcuts src={'/icons/to-do.png'} name='To-Do' />
                        <Shortcuts src={'/icons/google.png'} name='Google' />
                        <Shortcuts src={'/icons/lock.png'} name='Encryptor/Decryptor' />
                        </div>
                        <div>
                        <Shortcuts src={'/icons/notes.webp'} name='Notes' />
                        <Shortcuts src={'/icons/music.png'} name='Music' />
                        <Shortcuts src={'/icons/resume.png'} name='Resume'/>
                        <Shortcuts src={'/icons/stopwatch.png'} name='Stopwatch' />
                        <Shortcuts src={'/icons/cake.png'} name='Birthday' />
                        </div>
                        </div>
                        <Window Open = {open} AppName = {tab} onClose={()=> setOpen(false)} />
                    </div>
                    <BottomBar/>
                </div>
        </div>
    )
}
