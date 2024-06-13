import type Fetch from './Fetch';

export type Service<TData, TParams extends any[]> = (...args: TParams) => Promise<TData>;

export interface FetchState<TData, TParams extends any[]> {
  data?: TData;
  error?: Error;
  loading: boolean;
  params?: TParams;
}
export interface Options<TData, TParams extends any[]> {
  manual?: boolean;
  onError?: (e: Error, params: TParams) => void;
  defaultParams?: TParams; // 手动还是自动触发
  onSuccess?: (data: TData, params: TParams) => void;
  onFinally?: (params: TParams, data?: TData, e?: Error) => void;
  onCancel?: () => void;
  onMutate?: (data: TData) => void;
}


export interface Result<TData, TParams extends any[]> {
  loading: boolean;
  data?: TData;
  error?: Error;
  params: TParams | [];
  cancel: Fetch<TData, TParams>['cancel'];
  refresh: Fetch<TData, TParams>['refresh'];
  refreshAsync: Fetch<TData, TParams>['refreshAsync'];
  run: Fetch<TData, TParams>['run'];
  runAsync: Fetch<TData, TParams>['runAsync'];
  mutate: Fetch<TData, TParams>['mutate'];
}