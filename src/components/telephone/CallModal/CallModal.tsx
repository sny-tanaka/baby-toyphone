import React from 'react';

import useSound from 'use-sound';

import styles from './style.module.scss';

import SoundPush from '@/assets/sounds/telephone/push.mp3';
import { IconButton } from '@/components/common/IconButton/IconButton';
import { Modal } from '@/components/common/Modal/Modal';

type Props = {
  isOpen: boolean;
  onCancel: () => void;
  showNumber: string;
};

export const CallModal = React.memo(({ isOpen, onCancel, showNumber }: Props) => {
  const [play] = useSound(SoundPush);

  return (
    <Modal isOpen={isOpen}>
      <div className={styles.call_modal}>
        <div className={styles.show_number}>{showNumber}</div>
        <IconButton
          icon="tel"
          backgroundColor="red"
          onClick={() => {
            play();
            onCancel();
          }}
        />
      </div>
    </Modal>
  );
});
