import React from 'react';

import useSound from 'use-sound';

import styles from './style.module.scss';

import SoundPush from '@/assets/sounds/telephone/push.mp3';
import { IconButton } from '@/components/common/IconButton/IconButton';
import { Modal } from '@/components/common/Modal/Modal';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onCancel?: () => void;
  showNumber: string;
  setShowNumber: (showNumber: string) => void;
};

export const CallModal = React.memo(
  ({ isOpen, setIsOpen, onCancel, showNumber, setShowNumber }: Props) => {
    const [play] = useSound(SoundPush);

    return (
      <Modal isOpen={isOpen}>
        <div className={styles.call_modal}>
          <div className={styles.show_number}>{showNumber}</div>
          <IconButton
            icon="tel"
            backgroundColor="red"
            onClick={() => {
              setIsOpen(false);
              setShowNumber('');
              if (onCancel) {
                onCancel();
              }
              play();
            }}
          />
        </div>
      </Modal>
    );
  }
);
