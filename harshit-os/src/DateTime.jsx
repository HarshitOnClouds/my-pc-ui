import React, { useEffect, useState } from "react";

function LiveClock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const time = dateTime.toLocaleTimeString(); 
  const date = dateTime.toLocaleDateString(); 
  return (
    <div className="text-white text-[14px] px-2 flex flex-col justify-center items-center ">
      <div>{time}</div>
      <div>{date}</div>
    </div>
  );
}

export default LiveClock;
