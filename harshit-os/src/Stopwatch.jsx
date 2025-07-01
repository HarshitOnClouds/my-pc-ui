import { useState, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  };

  const stop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = (ms) => {
    const minutes = String(Math.floor(ms / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
    const centiseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
    return `${minutes}:${seconds}.${centiseconds}`;
  };

  return (
    <div className="w-64 mx-auto bg-gray-800 rounded shadow p-4 flex flex-col items-center">
      <div className="text-white text-3xl font-mono mb-4">{formatTime(time)}</div>
      <div className="flex space-x-2">
        <button
          onClick={start}
          className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
        >
          Start
        </button>
        <button
          onClick={stop}
          className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="bg-yellow-600 hover:bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
