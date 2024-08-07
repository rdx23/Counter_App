import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const decreaseHandler = () => {
    setCounter(counter - 1);
  };

  const increaseHandler = () => {
    setCounter(counter + 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#dec9e9] flex-col gap-10">
      <div className="text-[#6247aa] font-medium text-[2rem] font-bold">
        Increment & Decrement
      </div>
      {/* MInus Button */}
      <div className="bg-white flex justify-center gap-12 py-3 rounded-lg text-[25px] text-[#344151] border-2 border-[#c77dff]">
        <button
          onClick={decreaseHandler}
          className="border-r-2 text-center w-20 border-[#e0aaff] text-5xl text-[#7251b5] pb-1"
        >
          -
        </button>

        {/* Plus Button */}
        <div className="font-bold gap-12 text-5xl">{counter}</div>

        <button
          onClick={increaseHandler}
          className="border-l-2 text-center w-20 border-[#e0aaff] text-5xl text-[#7251b5] pb-2"
        >
          +
        </button>

        {/* Reset Button */}
      </div>
      <button
        onClick={resetHandler}
        className="bg-[#6247aa] text-white px-5 py-2 rounded-sm text-lg capitalize"
      >
        reset
      </button>
    </div>
  );
}

export default App;
