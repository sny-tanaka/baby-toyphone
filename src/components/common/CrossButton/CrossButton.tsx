import styles from './style.module.scss';

type Props = {
  onClick?: () => void;
};

export const CrossButton = ({ onClick }: Props) => {
  return (
    <button
      className={styles.cross_button}
      onClick={onClick}
    >
      ✕
    </button>
  );
};
