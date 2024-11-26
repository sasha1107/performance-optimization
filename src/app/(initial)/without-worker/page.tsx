"use client";
import { useState } from "react";

const Page = () => {
  const [number, setNumber] = useState<number | null>(null);
  const handleClick = () => {
    for (let i = 0; i < 5000000000; i++) {}
    setNumber(Math.floor(Math.random() * 100));
  };
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <span>숫자:</span>
          <div className="animate-bounce rounded-full">{number}</div>
        </div>
        <input placeholder="type something." />
        <button onClick={handleClick}>Start long task..</button>
      </div>
    </div>
  );
};

export default Page;
