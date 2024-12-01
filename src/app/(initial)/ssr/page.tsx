import React from "react";

const Page = async () => {
  const res = await fetch(`http://localhost:3000/api`, {
    cache: "no-cache",
  });
  const data = await res.json();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <input placeholder="type something." className="text-black" />
        <button>Button</button>
      </div>
      <div>{data.data}</div>
    </div>
  );
};

export default Page;
