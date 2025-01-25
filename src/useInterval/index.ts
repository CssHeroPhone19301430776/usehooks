import { useCallback, useEffect, useRef } from 'react';

type FnType = () => void;
const useInterval = (
  callback: FnType,
  delay: number = 1000,
  immediate: boolean = false,
): FnType => {
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const callbackRef = useRef<FnType>(callback); // 用于保存最新的 callback

  const clearFn = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  // 每次渲染时更新 callbackRef 的值
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (immediate) {
      callbackRef.current();
    }
    timerRef.current = setInterval(() => {
      callbackRef.current(); // 每次都读取最新的 callback
    }, delay);
    return clearFn;
  }, [delay]);

  return clearFn;
};

export default useInterval;
