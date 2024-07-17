import React, { useEffect } from 'react';

import useSound from 'use-sound';

import styles from './style.module.scss';

import SoundPush from '@/assets/sounds/telephone/push.mp3';
import SoundShutdown from '@/assets/sounds/telephone/shutdown.mp3';
import { IconButton } from '@/components/common/IconButton/IconButton';
import { Modal } from '@/components/common/Modal/Modal';
import { useRecorder } from '@/hooks/useRecorder';
import { sleep } from '@/logics/sleep/sleep';

type Props = {
  isOpen: boolean;
  onCancel: () => void;
  showNumber: string;
  isRecording: boolean;
};

export const CallModal = React.memo(({ isOpen, onCancel, showNumber, isRecording }: Props) => {
  const [play] = useSound(SoundPush);
  const [shutdownPlay] = useSound(SoundShutdown);
  const { startRecording, stopRecording, playAudio } = useRecorder();

  const [recordingTime, setRecordingTime] = React.useState(0);
  const [recordingIntervalId, setRecordingIntervalId] = React.useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRecording) {
      setRecordingTime(0);
      startRecording();
      const intervalId = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
      setRecordingIntervalId(intervalId);
    }
  }, [isRecording]);

  return (
    <Modal isOpen={isOpen}>
      <div className={styles.call_modal}>
        <div className={styles.show_number}>{showNumber}</div>
        <div className={styles.show_recording}>
          {isRecording && (
            <div>{`${Math.floor(recordingTime / 60)
              .toString()
              .padStart(2, '0')}:${(recordingTime % 60).toString().padStart(2, '0')}`}</div>
          )}
        </div>
        <IconButton
          icon="tel"
          backgroundColor="red"
          onClick={async () => {
            play();
            if (recordingIntervalId) {
              clearInterval(recordingIntervalId);
            }
            await stopRecording();
            playAudio();
            await sleep(recordingTime * 1000);
            // 電話を切る音を再生
            shutdownPlay();
            await sleep(3790);
            onCancel();
          }}
        />
      </div>
    </Modal>
  );
});
