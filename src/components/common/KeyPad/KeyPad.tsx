import React from 'react';

import styles from './style.module.scss';

import { CrossButton } from '@/components/common/CrossButton/CrossButton';
import { IconButton } from '@/components/common/IconButton/IconButton';
import { NumberButton } from '@/components/common/NumberButton/NumberButton';
import { useNumberSounds } from '@/hooks/useNumberSounds';

type Props = {
  onPushButton: (char: string) => void;
  onCall: () => void;
  onBackspace: () => void;
  callDisabled?: boolean;
};

export const KeyPad = React.memo(({ onPushButton, onCall, onBackspace, callDisabled }: Props) => {
  const numberSounds = useNumberSounds();

  return (
    <div className={styles.key_pad}>
      {numberSounds.map(({ char, play }) => (
        <div
          className={styles.button}
          key={char}
        >
          <NumberButton
            char={char}
            soundPlay={play}
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
          disabled={callDisabled}
        />
      </div>
      <div className={styles.button}>
        <CrossButton onClick={onBackspace} />
      </div>
    </div>
  );
});
