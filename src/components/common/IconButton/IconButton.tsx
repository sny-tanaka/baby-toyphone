import { useMemo } from 'react';

import styles from './style.module.scss';

import { ReactComponent as TelIcon } from '@/images/icons/tel.svg';

type Props = {
  icon: 'tel';
  backgroundColor: 'green';
  diameter?: number;
  onClick?: () => void;
};

export const IconButton = ({ icon, backgroundColor, diameter = 80, onClick }: Props) => {
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
    >
      <Icon className={styles.icon} />
    </button>
  );
};