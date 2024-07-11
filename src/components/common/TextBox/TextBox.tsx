import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './style.module.scss';

type Props = {
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register?: UseFormRegisterReturn;
};

export const TextBox = ({ defaultValue, onChange, register }: Props) => {
  return (
    <input
      className={styles.text_box}
      type="text"
      defaultValue={defaultValue}
      onChange={onChange}
      {...register}
    />
  );
};
