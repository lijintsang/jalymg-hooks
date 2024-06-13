import useRequestImplement from './useRequestImplement';
import type { Options, Service } from './types';

// service 是一个 promise 函数，里面处理异步请求
function useRequest<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options?: Options<TData, TParams>,
) {
  return useRequestImplement<TData, TParams>(
    service,
    options,
    // 留给自定义加入 plugin
  );
}

export default useRequest;