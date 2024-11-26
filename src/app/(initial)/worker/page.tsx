"use client";
import { useState } from "react";

const Page = () => {
  const [number, setNumber] = useState<number | null>(null);
  const worker = new Worker("./worker.js");
  const handleClick = () => {
    // for (let i = 0; i < 5000000000; i++) {}
    // setNumber(Math.floor(Math.random() * 100));
    worker.postMessage("start");
  };
  worker.onmessage = (e) => {
    setNumber(e.data);
  };
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <span>숫자:</span>
          <div className="animate-bounce rounded-full">{number}</div>
        </div>
        <input placeholder="type something." className="text-black" />
        <button onClick={handleClick}>Start long task..</button>
      </div>
    </div>
  );
};

export default Page;
