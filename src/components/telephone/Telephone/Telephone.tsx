import { useCallback, useState } from 'react';
import React from 'react';

import styles from './style.module.scss';

import { KeyPad } from '@/components/common/KeyPad/KeyPad';
import { CallModal } from '@/components/telephone/CallModal/CallModal';

export const Telephone = React.memo(() => {
  const [inputNumber, setInputNumber] = useState('');
  const [isCalling, setIsCalling] = useState(false);

  const onCancel = useCallback(() => {
    setInputNumber('');
    setIsCalling(false);
  }, []);

  const onCall = useCallback(async () => {
    setIsCalling(true);
  }, []);

  const onPushButton = useCallback(
    (c: string) => {
      if (inputNumber.length >= 11) {
        onCall();
        return false;
      } else {
        setInputNumber((prev) => prev + c);
        return true;
      }
    },
    [onCall, inputNumber]
  );

  return (
    <div className={styles.telephone}>
      <div className={styles.input}>{inputNumber}</div>
      <KeyPad
        onPushButton={onPushButton}
        onCall={onCall}
        onBackspace={() => setInputNumber((prev) => prev.slice(0, -1))}
        callDisabled={inputNumber.length === 0}
      />
      {isCalling && (
        <CallModal
          onCancel={onCancel}
          inputNumber={inputNumber}
        />
      )}
    </div>
  );
});
