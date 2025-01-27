import { useState } from 'react';
import useMemoizedFn from '../useMemoizedFn';

const useUpdate = () => {
  const [, setState] = useState({});
  const updata = useMemoizedFn(() => setState({}));
  return updata;
};

export default useUpdate;
