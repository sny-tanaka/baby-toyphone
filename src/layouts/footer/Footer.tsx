import styles from './style.module.scss';

import { CustomNavLink } from '@/components/common/CustomNavLink/CustomNavLink';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <CustomNavLink to="/">Root</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/users">Users</CustomNavLink>
        </li>
      </ul>
    </div>
  );
};
