import { useEffect } from 'react';
import useLatest from '../useLatest';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

const useUnmount = (fn: () => void) => {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
    }
  }

  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      // 组件卸载的时候，执行传入的函数
      fnRef.current();
    },
    [],
  );
};

export default useUnmount;
