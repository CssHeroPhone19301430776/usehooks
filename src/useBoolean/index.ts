import { useState } from 'react';

interface Actions {
  set: (value: boolean) => void;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

const useBoolean = (defaultValue: boolean = false): [boolean, Actions] => {
  const [value, setValue] = useState(defaultValue);

  const actions: Actions = {
    set: setValue,
    setTrue: () => setValue(true),
    setFalse: () => setValue(false),
    toggle: () => setValue((v) => !v),
  };

  return [value, actions];
};

export default useBoolean;
