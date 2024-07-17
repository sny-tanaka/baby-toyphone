import { useCallback, useEffect, useRef, useState } from 'react';

import RecordRTC from 'recordrtc';

export const useRecorder = () => {
  const recorderRef = useRef<RecordRTC | null>(null);
  const audioBlobRef = useRef<Blob | null>(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = useCallback(async () => {
    if (isRecording) {
      // すでに録音中の場合は何もしない
      return;
    }
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const newRecorder = new RecordRTC(stream, { type: 'audio' });
    newRecorder.startRecording();
    recorderRef.current = newRecorder;
    setIsRecording(true);
  }, [recorderRef, isRecording]);

  const stopRecording = useCallback(async () => {
    if (recorderRef.current) {
      const b = await new Promise<Blob>((resolve) => {
        recorderRef.current!.stopRecording(() => {
          const blob = recorderRef.current!.getBlob();
          resolve(blob);
        });
      });
      recorderRef.current.destroy();
      recorderRef.current = null;
      audioBlobRef.current = b;
      setIsRecording(false);
    }
  }, [recorderRef, audioBlobRef]);

  const playAudio = useCallback(() => {
    if (audioBlobRef.current) {
      const audio = new Audio(URL.createObjectURL(audioBlobRef.current));
      audio.play();
    }
  }, [audioBlobRef]);

  useEffect(() => {
    // アンマウント時にリソースを解放
    return () => {
      if (recorderRef.current) {
        recorderRef.current.destroy();
      }
    };
  }, [recorderRef]);

  return { startRecording, stopRecording, playAudio, isRecording };
};
