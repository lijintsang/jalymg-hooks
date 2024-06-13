import { isFunction } from '../../utils';
import type { Options, Service, FetchState } from './types';
import type { MutableRefObject } from 'react';

class Fetch<TData, TParams extends any[]> {
  count: number = 0;
  // 创建一个请求返回的结果
  state: FetchState<TData, TParams> = {
    loading: false,
    params: undefined,
    data: undefined,
    error: undefined,
  };

  // 无论何时在构造函数参数上指定 public 或 private ,都会在类上创建相应的公共/私有变量,并使用参数的值填充该变量.
  constructor(
    public serviceRef: MutableRefObject<Service<TData, TParams>>,
    public options: Options<TData, TParams>,
    public update: () => void,
  ) {
    this.state = {
      ...this.state,
      loading: !options.manual,
      ...options,
    };
  }

  setState(newState: Partial<FetchState<TData, TParams>> = {}) {
    this.state = {
      ...this.state,
      ...newState,
    };

    // 触发重新渲染
    this.update();
  }

  // 真正执行发送请求的函数
  run(...params: TParams) {
    this.runAsync(...params).catch((error) => {
      if (!this.options.onError) {
        console.error(error);
      }
    });
  }

  // 与 run 用法一致，但返回的是 Promise，需要自行处理异常。
  async runAsync(...params: TParams): Promise<TData> {
    this.count += 1;
    const currentCount = this.count;

    this.setState({
      loading: true,
      params,
    });

    try {
      const res: TData = await this.serviceRef.current(...params);

      if (currentCount !== this.count) {
        // return void 0 as TData;
        return new Promise(() => {});
      }

      this.setState({
        loading: false,
        data: res,
      });
      this.options.onSuccess?.(res, params);

      this.options.onFinally?.(params, res, undefined);
      return res;
    } catch (error) {
      if (currentCount !== this.count) {
        // return void 0 as TData;
        return new Promise(() => {});
      }

      this.setState({
        loading: false,
        error,
      });

      this.options.onError?.(error, params);

      this.options.onFinally?.(params, undefined, error);

      throw error;
    }
  }

  // 使用上一次的 params，重新调用 run
  refresh() {
    // @ts-ignore
    this.run(...(this.state.params || []));
  }

  // 使用上一次的 params，重新调用 runAsync
  refreshAsync() {
    // @ts-ignore
    return this.runAsync(...(this.state.params || []));
  }

  // 忽略当前 Promise 的响应
  cancel() {
    this.count += 1;
    this.setState({
      loading: false,
    });
  }

  mutate(data?: TData | ((oldData?: TData) => TData | undefined)): void {
    let actualData: TData | undefined;

    if (isFunction(data)) {
      actualData = data(this.state.data);
    } else {
      actualData = data;
    }

    this.setState({
      data: actualData,
    });
  }
}

export default Fetch;