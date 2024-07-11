import styles from './style.module.scss';

import { CrossButton } from '@/components/common/CrossButton/CrossButton';
import { IconButton } from '@/components/common/IconButton/IconButton';
import { NumberButton } from '@/components/common/NumberButton/NumberButton';

const BUTTONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '＊', '0', '＃'];

type Props = {
  onPushButton: (char: string) => void;
  onCall: () => void;
  onBackspace: () => void;
};

export const KeyPad = ({ onPushButton, onCall, onBackspace }: Props) => {
  return (
    <div className={styles.key_pad}>
      {BUTTONS.map((i) => (
        <div
          className={styles.button}
          key={i}
        >
          <NumberButton
            char={i}
            onClick={onPushButton}
          />
        </div>
      ))}
      <div className={styles.button} />
      <div className={styles.button}>
        <IconButton
          icon="tel"
          backgroundColor="green"
          onClick={onCall}
        />
      </div>
      <div className={styles.button}>
        <CrossButton onClick={onBackspace} />
      </div>
    </div>
  );
};
