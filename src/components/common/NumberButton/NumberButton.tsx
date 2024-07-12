import React from 'react';

import { PlayFunction } from 'use-sound/dist/types';

import styles from './style.module.scss';

type Props = {
  char: string;
  soundPlay: PlayFunction;
  diameter?: number;
  fontSize?: number;
  onClick?: (c: string) => void;
};

export const NumberButton = React.memo(
  ({ char, soundPlay, diameter = 80, fontSize = 32, onClick }: Props) => {
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
            soundPlay();
            onClick(char);
          }
        }}
      >
        {char}
      </button>
    );
  }
);
