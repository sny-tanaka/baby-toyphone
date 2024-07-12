import React from 'react';

import useSound from 'use-sound';

import styles from './style.module.scss';

type Props = {
  char: string;
  diameter?: number;
  fontSize?: number;
  onClick?: (c: string) => void;
  sound: string;
};

export const NumberButton = React.memo(
  ({ char, diameter = 80, fontSize = 32, onClick, sound }: Props) => {
    const [play] = useSound(sound, {
      interrupt: true,
    });

    return (
      <button
        className={styles.number_button}
        style={{
          width: diameter,
          height: diameter,
          fontSize,
        }}
        onClick={() => {
          if (onClick) {
            play();
            onClick(char);
          }
        }}
      >
        {char}
      </button>
    );
  }
);
