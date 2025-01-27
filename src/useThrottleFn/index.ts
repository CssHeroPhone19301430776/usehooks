import _ from 'lodash-es';
import useCreation from '../useCreation';
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';

interface ThrottleOptions {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
}
interface ThrottledFn<T extends FnType> {
  run: (...args: Parameters<T>) => ReturnType<T>;
  cancel: () => void;
  flush: () => void;
}
type FnType = (...args: any[]) => any;

const useThrottleFn = <T extends FnType>(
  callback: T,
  option: ThrottleOptions,
): ThrottledFn<T> => {
  // 设置默认值
  option.leading = option?.leading ?? true;
  option.trailing = option?.trailing ?? true;
  option.wait = option?.wait ?? 1000;

  const callbackRef = useLatest(callback);

  // 保存_.debounce()返回的函数
  const throttle = useCreation(
    () =>
      _.throttle(
        (...args: Parameters<T>): ReturnType<T> => {
          return callbackRef.current(...args);
        },
        option.wait,
        option,
      ),
    [],
  );

  useUnmount(() => {
    throttle.cancel();
  });

  return {
    run: throttle,
    cancel: throttle.cancel,
    flush: throttle.flush,
  };
};

export default useThrottleFn;
