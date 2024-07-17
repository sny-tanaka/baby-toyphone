import useSound from 'use-sound';

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

export const useNumberSounds = () => {
  const numberSounds = BUTTONS.map(({ char, sound }) => {
    const [play, { stop, pause }] = useSound(sound, {
      interrupt: true,
    });
    return {
      char: char,
      play: play,
      stop: stop,
      pause: pause,
    };
  });

  return numberSounds;
};
