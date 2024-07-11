import { atom } from 'recoil';

import { Auth } from '@/types/auth';

export const AuthAtom = atom<Auth>({
  key: 'AuthAtom',
  default: {
    id: '',
    name: '',
    isAdmin: false,
  },
});
