import LiveClock from "./DateTime"
import Win from "./win"

export default function BottomBar(){



    return(
        <div className="min-w-screen h-[7%] relative flex justify-between items-center">
            <div className="bg-neutral-900/50 inset-0 absolute pointer-events-none"></div>
            
            <div className="relative flex w-full justify-between items-center">
                 <div className="opacity-0">
                    notifs
                 </div>
                <div className="flex "> 
                    <Win/>
                    <img src="./icons/calculator.webp" className="w-6 h-6 mx-1  hover:opacity-70 active:scale-50 active:opacity-60 transition transform"/>
                    <img src="./icons/to-do.png" className="w-6 h-6 mx-1  hover:opacity-70 active:scale-50 active:opacity-60 transition transform"/>
                    <img src="./icons/lock.png" className="w-6 h-6 mx-1  hover:opacity-70 active:scale-50 active:opacity-60 transition transform"/>
                </div>
                <LiveClock/>
            </div>
        </div>
    )
}