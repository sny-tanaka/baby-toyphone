import { useCallback, useState } from 'react';
import React from 'react';

import useSound from 'use-sound';

import styles from './style.module.scss';

import SoundRingback from '@/assets/sounds/telephone/ringback_tone.mp3';
import { KeyPad } from '@/components/common/KeyPad/KeyPad';
import { CallModal } from '@/components/telephone/CallModal/CallModal';
import { NumberSounds } from '@/hooks/NumberSounds';
import { sleep } from '@/logics/sleep/sleep';

export const Telephone = React.memo(() => {
  const numberSounds = NumberSounds();

  const [inputNumber, setInputNumber] = useState('');
  const [isCalling, setIsCalling] = useState(false);
  const [showNumber, setShowNumber] = useState('');

  const [ringPlay, { stop: ringStop }] = useSound(SoundRingback);

  const addShowNumber = useCallback(
    (c: string) => {
      setShowNumber((prev) => prev + c);
      const sound = numberSounds.find((b) => b.char === c);
      if (sound) {
        sound.play();
      }
    },
    [numberSounds]
  );

  const onCall = useCallback(async () => {
    setIsCalling(true);
    // 表示番号を徐々に増やすアニメーションを再生
    for (let i = 0; i < inputNumber.length; i++) {
      addShowNumber(inputNumber[i]);
      // 300ms待機
      await sleep(300);
    }
    // 電話をかける音を再生
    ringPlay();
  }, [inputNumber]);

  const onCancel = useCallback(() => {
    setInputNumber('');
    ringStop();
    setIsCalling(false);
    setShowNumber('');
  }, [ringStop]);

  return (
    <div className={styles.telephone}>
      <div className={styles.input}>{inputNumber}</div>
      <KeyPad
        onPushButton={(c) => setInputNumber((prev) => prev + c)}
        onCall={onCall}
        onBackspace={() => setInputNumber((prev) => prev.slice(0, -1))}
        callDisabled={inputNumber.length === 0}
      />
      <CallModal
        isOpen={isCalling}
        onCancel={onCancel}
        showNumber={showNumber}
      />
    </div>
  );
});
