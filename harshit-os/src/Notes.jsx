import { useState, useRef, useEffect } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim() === "") return;
    setNotes([...notes, input]);
    setInput("");
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const inputRef = useRef(null)
  useEffect(()=>{
    if(inputRef.current){
        inputRef.current.focus()
    }})

  return (
<div className="bg-stone-900 w-full h-full overflow-y-scroll">
    <h1 className="text-xl font-bold px-2 text-white mb-4">Notes</h1>
    <div className="flex ">
        <div className=" w-[30%]  text-white">
          <div className="flex flex-col items-center mb-4 ml-4 py-2 ">
            <textarea
                ref = {inputRef}
              className=" p-2 h-50 mb-2 w-[100%] text-sm text-white rounded-xl bg-sky-950 resize-none break"
              placeholder="Write a note..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addNote()}
            />
            <button
              onClick={addNote}
              className=" h-6 w-12 text-sm bg-green-600 hover:bg-green-500 px-1 rounded-sm"
            >
              Add
            </button>
          </div>
        </div>
        <div className=" w-[70%] p-2">
            <ul>
              {[...notes].reverse().map((note, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center w-[100%] p-2 rounded"
                >
                  <div className="w-[85%] min-h-30 bg-green-950 text-white text-sm rounded-xl  break-words p-2" >{note}</div>
                  <button onClick={() => deleteNote(index)} className="bg-red-600 hover:bg-red-500 text-xs px-2 py-1 ml-3 w-[15%] rounded">Delete</button>
                </li>
              ))}
            </ul>
          </div>
    </div>
</div>
  );
}
