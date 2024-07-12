import styles from './style.module.scss';

type Props = {
  char: string;
  diameter?: number;
  fontSize?: number;
  onClick?: (c: string) => void;
  sound?: string;
};

export const NumberButton = ({ char, diameter = 80, fontSize = 32, onClick, sound }: Props) => {
  const audio = new Audio(sound);
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
          audio.play();
          onClick(char);
        }
      }}
    >
      {char}
    </button>
  );
};
