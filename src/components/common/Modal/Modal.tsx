import React from 'react';

import styles from './style.module.scss';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

export const Modal = React.memo(({ isOpen, children }: Props) => {
  return (
    <div
      className={styles.modal}
      style={{ display: isOpen ? undefined : 'none' }}
    >
      <div>{children}</div>
    </div>
  );
});
