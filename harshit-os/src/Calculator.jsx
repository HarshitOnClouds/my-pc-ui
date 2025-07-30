import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(String(eval(input)));
    } catch (e) {
      setInput("Error");
    }
  };

  const Button = ({ label, onClick, className = "" }) => (
    <button
      className={`w-12 h-12 text-white bg-gray-700 flex justify-center items-center hover:opacity-70 active:scale-75 transition-all transform p-4 text-lg rounded ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );

  return (
    <div className="flex flex-col  justify-center items-center">
    <div className="text-white text-3xl mb-20" >A Calculator to calculate your chances of getting some bitches</div>
    <div className="w-64 bg-slate-900 rounded shadow p-4">
      <div className="bg-neutral-800 text-white text-right px-3 py-1 mb-4 rounded h-12 flex items-center justify-end overflow-x-auto">
        {input || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Button label="7" onClick={() => handleClick("7")} />
        <Button label="8" onClick={() => handleClick("8")} />
        <Button label="9" onClick={() => handleClick("9")} />
        <Button label="/" onClick={() => handleClick("/")} className="bg-orange-600" />
        <Button label="4" onClick={() => handleClick("4")} />
        <Button label="5" onClick={() => handleClick("5")} />
        <Button label="6" onClick={() => handleClick("6")} />
        <Button label="*" onClick={() => handleClick("*")} className="bg-orange-600" />
        <Button label="1" onClick={() => handleClick("1")} />
        <Button label="2" onClick={() => handleClick("2")} />
        <Button label="3" onClick={() => handleClick("3")} />
        <Button label="-" onClick={() => handleClick("-")} className="bg-orange-600" />
        <Button label="0" onClick={() => handleClick("0")} />
        <Button label="." onClick={() => handleClick(".")} />
        <Button label="C" onClick={handleClear} className="bg-red-600" />
        <Button label="+" onClick={() => handleClick("+")} className="bg-orange-600" />
      </div>
      <button
        className="w-full bg-green-600 hover:bg-green-500 text-white p-2 mt-2 rounded text-lg"
        onClick={handleCalculate}
      >
        =
      </button>
    </div>
    </div>
  );
}
