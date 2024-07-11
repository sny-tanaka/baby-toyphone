import styles from './style.module.scss';

type Props = {
  number: number;
  diameter?: number;
  fontSize?: number;
  onClick?: (n: number) => void;
};

export const NumberButton = ({ number, diameter = 80, fontSize = 32, onClick }: Props) => {
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
          onClick(number);
        }
      }}
    >
      {number.toString()}
    </button>
  );
};
