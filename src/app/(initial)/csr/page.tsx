"use client";
import { useState, useEffect } from "react";

const Page = () => {
  const [data, setData] = useState<{
    data: string;
  } | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`http://localhost:3000/api`, {
        cache: "no-cache",
      });
      const data = await res.json();
      setData(data);
    }
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2">
        <input placeholder="type something." className="text-black" />
        <button>Button</button>
      </div>
      <div>{data ? data.data : <>CSR Loading...</>}</div>
    </div>
  );
};

export default Page;
