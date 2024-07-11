export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type ApiResult<T> = {
  status: number;
  result: T;
};
