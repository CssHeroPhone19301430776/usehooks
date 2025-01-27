import { useEffect, useState } from 'react';
import useDebounceFn from '../useDebounceFn';

interface Option {
  wait?: number;
  leading?: boolean;
  trailing?: boolean;
  maxWait?: number;
}
const useDebounceValue = <T>(value: T, options: Option) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const { run } = useDebounceFn(() => {
    setDebouncedValue(value);
  }, options);

  useEffect(() => {
    run();
  }, [value]);

  return debouncedValue;
};

export default useDebounceValue;
