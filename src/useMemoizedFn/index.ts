import { useMemo, useRef } from 'react';

type FnType = (...args: any[]) => any;
const useMemoizedFn = <T extends FnType>(fn: T): T => {
  const fnRef = useRef<T>(fn);

  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = useMemo<T>(() => fn, [fn]);

  const memoizedFn = useRef<FnType>();
  if (!memoizedFn.current) {
    memoizedFn.current = function (...args) {
      return fnRef.current.apply(this, args);
    };
  }

  return memoizedFn.current as T;
};

export default useMemoizedFn;
