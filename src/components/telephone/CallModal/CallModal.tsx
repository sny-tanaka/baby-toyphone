import React, { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

import useSound from 'use-sound';

import styles from './style.module.scss';

import SoundPush from '@/assets/sounds/telephone/push.mp3';
import SoundRingback from '@/assets/sounds/telephone/ringback_tone.mp3';
import SoundShutdown from '@/assets/sounds/telephone/shutdown.mp3';
import { IconButton } from '@/components/common/IconButton/IconButton';
import { Modal } from '@/components/common/Modal/Modal';
import { useNumberSounds } from '@/hooks/useNumberSounds';
import { useRecorder } from '@/hooks/useRecorder';
import { sleep } from '@/logics/sleep/sleep';

type Props = {
  onCancel: () => void;
  inputNumber: string;
};

export const CallModal = React.memo(({ onCancel, inputNumber }: Props) => {
  const numberSounds = useNumberSounds();
  const [pushPlay] = useSound(SoundPush);
  const [ringPlay, { stop: ringStop, duration: ringDuration }] = useSound(SoundRingback);
  const [shutdownPlay, { stop: shutdownStop }] = useSound(SoundShutdown);
  const { startRecording, stopRecording, playAudio } = useRecorder();

  const [showNumber, setShowNumber] = useState('');
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordingIntervalId, setRecordingIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const isAlreadyCanceledRef = useRef(false);

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

  useEffect(() => {
    // モーダルが開くとき
    if (ringDuration) {
      (async () => {
        // 表示番号を徐々に増やすアニメーションを再生
        for (let i = 0; i < inputNumber.length; i++) {
          addShowNumber(inputNumber[i]);
          // 300ms待機
          await sleep(300);
        }
        // 電話をかける音を再生
        ringPlay();
        // 再生中の待機
        await sleep(9960);
        // 音声の録音を開始
        setIsRecording(true);
        setRecordingTime(0);
        startRecording();
        const intervalId = setInterval(() => {
          setRecordingTime((prev) => prev + 1);
        }, 1000);
        setRecordingIntervalId(intervalId);
      })();
    }
  }, [ringDuration]);

  useEffect(() => {
    // アンマウント時にすべての音の再生を停止
    return () => {
      if (recordingIntervalId) {
        clearInterval(recordingIntervalId);
      }
      ringStop();
      shutdownStop();
    };
  }, []);

  return (
    <Modal isOpen={true}>
      <div className={styles.call_modal}>
        <div className={styles.show_number}>{showNumber}</div>
        {showCamera && (
          <div>
            <Webcam
              audio={false}
              width={216}
              height={384}
              videoConstraints={{
                facingMode: 'user',
                width: 1080,
                height: 1920,
              }}
            />
          </div>
        )}
        <div className={styles.show_recording}>
          {isRecording && (
            <div>{`${Math.floor(recordingTime / 60)
              .toString()
              .padStart(2, '0')}:${(recordingTime % 60).toString().padStart(2, '0')}`}</div>
          )}
        </div>
        <div className={styles.buttons}>
          <IconButton
            icon="camera"
            backgroundColor={showCamera ? 'red' : 'green'}
            onClick={() => setShowCamera((prev) => !prev)}
          />
          <IconButton
            icon="tel"
            backgroundColor="red"
            onClick={async () => {
              if (!isRecording || isAlreadyCanceledRef.current) {
                ringStop();
                isAlreadyCanceledRef.current = false;
                pushPlay();
                onCancel();
                return;
              }
              isAlreadyCanceledRef.current = true;
              pushPlay();
              if (recordingIntervalId) {
                clearInterval(recordingIntervalId);
              }
              await stopRecording();
              if (isAlreadyCanceledRef.current) {
                playAudio();
                await sleep(recordingTime * 1000);
                if (isAlreadyCanceledRef.current) {
                  // 電話を切る音を再生
                  shutdownPlay();
                  await sleep(3790);
                  onCancel();
                }
              }
            }}
          />
        </div>
      </div>
    </Modal>
  );
});
