import { useEffect, useRef } from 'react';

type FnType = () => void;

const useTimeout = (callback: FnType, delay: number = 1000): FnType => {
  const timer = useRef<NodeJS.Timeout>();
  const clearFn = () => clearTimeout(timer.current);

  useEffect(() => {
    timer.current = setTimeout(callback, delay);
    return clearFn;
  }, [delay]);

  return clearFn;
};

export default useTimeout;
