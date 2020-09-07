import { useRef, useState, useLayoutEffect } from "react";

const useDimensions = () => {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });
  useLayoutEffect(() => {
      if (ref.current) {
          setDimensions({
              width: ref.current.offsetWidth,
              height: ref.current.offsetHeight
          });
      }
  }, []);

  return [ref, dimensions];
};

export default useDimensions;
