import { useState, useEffect, useMemo } from "react";
import { throttle } from "lodash";

interface Props {
  options?: {
    throttle?: number;
  };
}
const useScroll = ({ options: { throttle: wait = 0 } = {} }: Props) => {
  const [directions, setDirections] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  });
  const [progress, setProgress] = useState({
    x: 0,
    y: 0,
  });

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollLeft = document.documentElement.scrollLeft;
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
    setProgress({
      x:
        document.body.scrollWidth - window.innerWidth === 0
          ? 0
          : window.scrollX / (document.body.scrollWidth - window.innerWidth),
      y: window.scrollY / (document.body.scrollHeight - window.innerHeight),
    });

    setDirections({
      left: scrollLeft < scroll.x,
      right: scrollLeft > scroll.x,
      top: scrollTop < scroll.y,
      bottom: scrollTop > scroll.y,
    });
  };
  const throttleHandleScroll = useMemo(
    () => throttle(handleScroll, wait),
    [wait]
  );

  useEffect(() => {
    window.addEventListener("scroll", throttleHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttleHandleScroll);
    };
  }, [throttleHandleScroll]);

  return {
    scrollX: scroll.x,
    scrollY: scroll.y,
    scrollXProgress: progress.x,
    scrollYProgress: progress.y,
    directions,
  };
};

export default useScroll;
