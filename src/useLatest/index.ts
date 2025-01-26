import { useRef } from 'react';

const useLatest = <T>(value: T) => {
  const valRef = useRef(value);
  valRef.current = value;
  return valRef;
};

export default useLatest;
