import styles from './style.module.scss';

type Props = {
  char: string;
  diameter?: number;
  fontSize?: number;
  onClick?: (c: string) => void;
};

export const NumberButton = ({ char, diameter = 80, fontSize = 32, onClick }: Props) => {
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
          onClick(char);
        }
      }}
    >
      {char}
    </button>
  );
};
