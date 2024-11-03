"use client";
import React from "react";
import { useScroll } from "@reactuses/core";

const Page = () => {
  const [x, y, isScrolling, _arrivedState, directions] = useScroll(window, {
    throttle: 5000,
  });
  console.log("x", x);
  console.log("y", y);
  console.log("isScrolling", isScrolling);
  console.log("directions", directions);
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
