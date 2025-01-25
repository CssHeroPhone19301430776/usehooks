import { useCallback, useEffect, useRef } from 'react';

type FnType = () => void;

const useTimeout = (callback: FnType, delay: number = 1000): FnType => {
  const timer = useRef<ReturnType<typeof setTimeout>>();
  const callbackRef = useRef<FnType>(callback);

  const clearFn = useCallback(() => clearTimeout(timer.current), []);

  // 更新 ref 中的 callback
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    timer.current = setTimeout(() => {
      callbackRef.current();
    }, delay);
    return clearFn;
  }, [delay]);

  return clearFn;
};

export default useTimeout;
