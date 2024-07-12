import styles from './style.module.scss';

type Props = {
  fontSize?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
};

export const CrossButton = ({ fontSize = '24px', width = 24, height = 24, onClick }: Props) => {
  return (
    <button
      className={styles.cross_button}
      style={{
        fontSize: fontSize,
        width: width,
        height: height,
      }}
      onClick={onClick}
    >
      ✕
    </button>
  );
};
