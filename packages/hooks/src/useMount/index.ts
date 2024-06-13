import { useEffect } from 'react';
import { isFunction } from '../utils';
import isDev from '../utils/isDev';

const useMount = (fn: () => void) => {
  if (isDev) {
    if (!isFunction(fn)) {
      console.error(
        `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
      );
    }
  }

  useEffect(() => {
    // 组件挂载的时候，执行传入的函数
    fn?.();
  }, []);
};

export default useMount;
