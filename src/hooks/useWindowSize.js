import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const resize = (e) => {
      const { innerWidth, innerHeight } = e.target;

      setWidth(innerWidth);
      setHeight(innerHeight);
    };

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;

    setWidth(innerWidth);
    setHeight(innerHeight);
  }, []);

  return {
    width,
    height,
  };
};

export default useWindowSize;
