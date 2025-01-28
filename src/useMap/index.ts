import { useState } from 'react';
import useCreation from '../useCreation';

interface Actions<K, V> {
  set: (key: K, value: V) => void;
  get: (key: K) => V | undefined;
  remove: (key: K) => void;
  reset: () => void;
  setAll: (newMap: Iterable<readonly [K, V]>) => void;
}

const useMap = <K, V>(
  initValue?: Iterable<readonly [K, V]>,
): [Map<K, V>, Actions<K, V>] => {
  const initMap = () => new Map(initValue);
  const [map, setMap] = useState<Map<K, V>>(initMap);

  const actions = useCreation(() => {
    const set = (key: K, value: V) => {
      setMap((prev) => {
        const temp = new Map(prev);
        temp.set(key, value);
        return temp;
      });
    };
    const get = (key: K) => map.get(key);
    const remove = (key: K) => {
      setMap((prev) => {
        const temp = new Map(prev);
        temp.delete(key);
        return temp;
      });
    };
    const reset = () => setMap(initMap());
    const setAll = (newMap: Iterable<readonly [K, V]>) => {
      setMap(new Map(newMap));
    };
    return {
      set,
      get,
      remove,
      reset,
      setAll,
    };
  }, []);

  return [map, actions];
};

export default useMap;
