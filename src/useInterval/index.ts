import { useCallback, useEffect, useRef } from 'react';

type FnType = () => void;
const useInterval = (
  callback: FnType,
  delay: number = 1000,
  immediate: boolean = false,
): FnType => {
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const clearFn = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  useEffect(() => {
    if (immediate) {
      callback();
    }
    timerRef.current = setInterval(callback, delay);
    return clearFn;
  }, [delay]);

  return clearFn;
};

export default useInterval;
