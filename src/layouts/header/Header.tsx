import { useRecoilValue } from 'recoil';

import styles from './style.module.scss';

import { AuthAtom } from '@/recoil/auth';

export const Header = () => {
  const auth = useRecoilValue(AuthAtom);

  return (
    <div className={styles.header}>
      <div className={styles.text}>Header</div>
      <div className={styles.text}>{auth.name}</div>
    </div>
  );
};
