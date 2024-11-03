"use client";
import React from "react";
import useScroll from "@/hooks/useScroll";

const Page = () => {
  const scroll = useScroll({
    options: {
      throttle: 0,
    },
  });
  console.log("scroll", scroll.directions);
  return (
    <div>
      {Array.from({ length: 100000 })
        .fill(0)
        .map((_, i) => (
          <div key={i}>{i}</div>
        ))}
    </div>
  );
};

export default Page;
