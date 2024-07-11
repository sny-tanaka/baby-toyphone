import { callApi } from './api';

import { ApiResult } from '@/types/api';
import { User } from '@/types/user';

export const getUser = async (id: string): Promise<ApiResult<User>> => {
  const { status, result } = await callApi<User>(`users/${id}`, 'GET');
  return { status, result };
};
