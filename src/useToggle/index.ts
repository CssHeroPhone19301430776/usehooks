import { useMemo, useState } from 'react';

interface Actions<T> {
  set: (value: T) => void;
  setToDefault: () => void;
  setToReverse: () => void;
  toggle: () => void;
}

function useToggle(): [boolean, Actions<boolean>];
function useToggle<T>(defaultValue: T): [T, Actions<T>];
function useToggle<T, R>(defaultValue: T, reverseValue: R): [T, Actions<T | R>];

function useToggle<D, R>(defaultValue: D = false as D, reverseValue?: R) {
  const [value, setValue] = useState<D | R>(defaultValue);
  const actions = useMemo(() => {
    const reverseValueOrigin = (
      reverseValue === undefined ? !defaultValue : reverseValue
    ) as D | R;

    const toggle = () => {
      setValue((v) => (v === defaultValue ? reverseValueOrigin : defaultValue));
    };
    const setToDefault = () => setValue(defaultValue);
    const setToReverse = () => setValue(reverseValueOrigin);
    const set = (v: D | R) => setValue(v);

    return { toggle, setToDefault, setToReverse, set };
  }, []);

  return [value, actions];
}

export default useToggle;
