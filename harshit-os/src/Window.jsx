import Calculator from "./Calculator"
import Stopwatch from "./Stopwatch"
import Music from "./Music"
import Youtube from "./Youtube"
import Notes from "./Notes"
import Google from "./Google"
import TodoList from "./To-Do"
import Birthday from "./Birthday"

import { useState } from "react"

export default function Window(props){

function Display(){
    switch(props.AppName){
        case 'Calculator':
            return <Calculator/>
        case 'Stopwatch':
            return <Stopwatch/>
        case 'Music':
            return <Music/>
        case 'Youtube':
            return <Youtube/>
        case 'Notes':
            return <Notes/>
        case 'Google':
            return <Google/>
        case 'To-Do':
            return <TodoList/>
        case 'Birthday':
            return <Birthday/>
        default:
            return <div className="text-white">App Not Found</div>
    }
}
    const [maximised, setMaximised] = useState(false)


    return(
        <div className={` ${maximised ? 'fixed top-0 right-0 w-full h-[100%] z-10' : 'w-[70%] h-[100%]'} bg-gray-800 transform transition-all  ${props.Open ? 'opacity-100' : 'opacity-0' }  `}>
            <div className="h-[6%] bg-black flex">
                <div className="flex justify-center items-center w-1/25 hover:opacity-70 ">
                    <div className='rounded-full w-3 h-3 bg-red-500' onClick={props.onClose} ></div>
                </div>
                <div className="flex justify-center items-center w-1/25 hover:opacity-70 ">
                    <div className='rounded-full w-3 h-3 bg-yellow-500'></div>
                </div>
                <div className="flex justify-center items-center w-1/25 hover:opacity-70 ">
                    <div className='rounded-full w-3 h-3 bg-green-500' onClick={()=> setMaximised(!maximised)} ></div>
                </div>
            </div>
            <div className="h-[94%] w-[100%] flex justify-center items-center" >
                <Display/>
            </div>
        </div>
    )
}