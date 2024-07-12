import { useMemo } from 'react';
import React from 'react';

import styles from './style.module.scss';

import { ReactComponent as TelIcon } from '@/assets/images/icons/tel.svg';

type Props = {
  icon: 'tel';
  backgroundColor: 'green' | 'red';
  diameter?: number;
  onClick?: () => void;
  disabled?: boolean;
};

export const IconButton = React.memo(
  ({ icon, backgroundColor, diameter = 80, onClick, disabled }: Props) => {
    const Icon = useMemo(() => {
      switch (icon) {
        case 'tel':
          return TelIcon;
        default:
          return TelIcon;
      }
    }, [icon]);

    return (
      <button
        className={`${styles.icon_button} ${styles[backgroundColor]}`}
        style={{
          width: diameter,
          height: diameter,
        }}
        onClick={() => {
          if (onClick) {
            onClick();
          }
        }}
        disabled={disabled}
      >
        <Icon className={styles.icon} />
      </button>
    );
  }
);
