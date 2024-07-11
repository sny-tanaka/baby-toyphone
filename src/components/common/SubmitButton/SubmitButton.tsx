import styles from './style.module.scss';

type Props = {
  label: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  disabled?: boolean;
};

export const SubmitButton = ({ label, onSubmit, disabled }: Props) => {
  return (
    <button
      type="submit"
      className={styles.submit_button}
      onClick={() => onSubmit}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
