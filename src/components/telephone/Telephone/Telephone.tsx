import { useState } from 'react';

import styles from './style.module.scss';

import { KeyPad } from '@/components/common/KeyPad/KeyPad';

export const Telephone = () => {
  const [inputNumber, setInputNumber] = useState('');

  return (
    <div className={styles.telephone}>
      <div className={styles.input}>{inputNumber}</div>
      <KeyPad
        onPushButton={(c) => setInputNumber((prev) => prev + c)}
        onCall={() => {}}
        onBackspace={() => setInputNumber((prev) => prev.slice(0, -1))}
      />
    </div>
  );
};
