import { NavLink } from 'react-router-dom';

import styles from './style.module.scss';

type Props = {
  to: string;
  children: React.ReactNode;
};

export const CustomNavLink = (props: Props) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) => (isActive ? styles.active : styles.non_active)}
    >
      {props.children}
    </NavLink>
  );
};
