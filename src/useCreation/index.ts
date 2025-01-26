import { useRef } from 'react';
import isSameDep from '../utils/isSameDep';

const useCreation = <T>(factory: () => T, deps: React.DependencyList) => {
  const { current } = useRef({
    obj: null as T,
    deps,
    init: false,
  });

  if (!current.init || !isSameDep(current.deps, deps)) {
    current.obj = factory();
    current.deps = deps;
    current.init = true;
  }

  return current.obj;
};

export default useCreation;
