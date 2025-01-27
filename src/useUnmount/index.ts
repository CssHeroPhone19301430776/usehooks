import { useEffect } from 'react';
import useLatest from '../useLatest';

const useUnmount = (callback: () => void) => {
  const CallbackRef = useLatest(callback);

  // 返回值中调用fn的最新值
  useEffect(() => () => CallbackRef.current(), []);
};

export default useUnmount;
