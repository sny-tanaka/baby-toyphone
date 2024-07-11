import { API_URL } from '@/constants';
import { ApiResult, Method } from '@/types/api';

// APIを呼び出す汎用関数
export const callApi = async <T>(
  path: string,
  method: Method,
  query?: URLSearchParams,
  body?: object
): Promise<ApiResult<T>> => {
  let url = `${API_URL}/${path}`;
  if (query) {
    url = `${url}?${query.toString()}`;
  }
  const params = { method, body: JSON.stringify(body) };
  const response = await fetch(url, params);
  const status = response.status;
  const result = await response.json();
  return { status, result };
};
