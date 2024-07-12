import styles from './style.module.scss';

import Sound0 from '@/assets/sounds/telephone/0.mp3';
import Sound1 from '@/assets/sounds/telephone/1.mp3';
import Sound2 from '@/assets/sounds/telephone/2.mp3';
import Sound3 from '@/assets/sounds/telephone/3.mp3';
import Sound4 from '@/assets/sounds/telephone/4.mp3';
import Sound5 from '@/assets/sounds/telephone/5.mp3';
import Sound6 from '@/assets/sounds/telephone/6.mp3';
import Sound7 from '@/assets/sounds/telephone/7.mp3';
import Sound8 from '@/assets/sounds/telephone/8.mp3';
import Sound9 from '@/assets/sounds/telephone/9.mp3';
import SoundAsterisk from '@/assets/sounds/telephone/asterisk.mp3';
import SoundSharp from '@/assets/sounds/telephone/sharp.mp3';
import { CrossButton } from '@/components/common/CrossButton/CrossButton';
import { IconButton } from '@/components/common/IconButton/IconButton';
import { NumberButton } from '@/components/common/NumberButton/NumberButton';

const BUTTONS = [
  { char: '1', sound: Sound1 },
  { char: '2', sound: Sound2 },
  { char: '3', sound: Sound3 },
  { char: '4', sound: Sound4 },
  { char: '5', sound: Sound5 },
  { char: '6', sound: Sound6 },
  { char: '7', sound: Sound7 },
  { char: '8', sound: Sound8 },
  { char: '9', sound: Sound9 },
  { char: '＊', sound: SoundAsterisk },
  { char: '0', sound: Sound0 },
  { char: '＃', sound: SoundSharp },
];

type Props = {
  onPushButton: (char: string) => void;
  onCall: () => void;
  onBackspace: () => void;
};

export const KeyPad = ({ onPushButton, onCall, onBackspace }: Props) => {
  return (
    <div className={styles.key_pad}>
      {BUTTONS.map(({ char, sound }) => (
        <div
          className={styles.button}
          key={char}
        >
          <NumberButton
            char={char}
            onClick={onPushButton}
            sound={sound}
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
