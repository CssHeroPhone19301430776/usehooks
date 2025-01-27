import _ from 'lodash-es';
import useCreation from '../useCreation';
import useLatest from '../useLatest';
import useUnmount from '../useUnmount';

interface Option {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}
type FnType = (...args: any[]) => any;

const useDebounceFn = (callback: FnType, option: Option) => {
  // 设置默认值
  option.leading = option?.leading ?? false;
  option.trailing = option?.trailing ?? true;
  option.wait = option?.wait ?? 1000;

  const callbackRef = useLatest(callback);

  // 保存_.debounce()返回的函数
  const debounce = useCreation(
    () =>
      _.debounce(
        (...args) => {
          callbackRef.current(...args);
        },
        option.wait,
        option,
      ),
    [],
  );

  useUnmount(() => {
    debounce.cancel();
  });

  return {
    run: debounce,
    cancel: debounce.cancel,
    flush: debounce.flush,
  };
};

export default useDebounceFn;
