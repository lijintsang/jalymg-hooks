import type { Options, Service, Result } from './types';
import useLatest from '../../useLatest';
import useMount from '../../useMount';
import useUnmount from '../../useUnmount';
import useUpdate from '../../useUpdate';
import useMemoizedFn from '../../useMemoizedFn';
import useCreation from '../../useCreation';
import Fetch from './Fetch';
// 这是真实发起请求的入口文件

function useRequestImplement<TData, TParams extends any[]>(
  service: Service<TData, TParams>,
  options: Options<TData, TParams> = {},
) {
  // @ts-ignore
  const { manual = false, defaultParams = [] as TParams } = options;

  // 基于原有的 service 发送请求
  // 通过 useRef 避免闭包
  const serviceRef = useLatest(service);

  // 要触发组件的更新
  const update = useUpdate();

  // fetch 的实例
  const fetchInstance = useCreation(() => {
    // 给plugin去使用

    // 返回真实的 fetch 的实例
    return new Fetch<TData, TParams>(serviceRef, options, update);
  }, []);

  // 初次渲染时,如果 manual 为false，需要在引用 useRequest 的时候自动触发
  useMount(() => {
    if (!manual) {
      const inputs = defaultParams || fetchInstance.state.params || [];
      console.log(defaultParams);
      fetchInstance.run(...(inputs as TParams));
    }
  });

  useUnmount(() => {
    fetchInstance.cancel();
  });

  return {
    loading: fetchInstance.state.loading,
    data: fetchInstance.state.data,
    error: fetchInstance.state.error,
    params: fetchInstance.state.params || [],
    cancel: useMemoizedFn(fetchInstance.cancel.bind(fetchInstance)),
    refresh: useMemoizedFn(fetchInstance.refresh.bind(fetchInstance)),
    refreshAsync: useMemoizedFn(fetchInstance.refreshAsync.bind(fetchInstance)),
    run: useMemoizedFn(fetchInstance.run.bind(fetchInstance)),
    runAsync: useMemoizedFn(fetchInstance.runAsync.bind(fetchInstance)),
    mutate: useMemoizedFn(fetchInstance.mutate.bind(fetchInstance)),
  } as Result<TData, TParams>;
}

export default useRequestImplement;