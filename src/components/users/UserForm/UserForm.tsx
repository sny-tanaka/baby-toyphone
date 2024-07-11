import { useForm } from 'react-hook-form';

import styles from './style.module.scss';

import { SubmitButton } from '@/components/common/SubmitButton/SubmitButton';
import { TextBox } from '@/components/common/TextBox/TextBox';

type Props = {
  name?: string;
  birthday?: string;
};

type FormData = {
  name: string;
  birthday: string;
};

export const UserForm = ({ name, birthday }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: { name: name ?? '', birthday: birthday ?? '' },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data, errors);
  });
  return (
    <form
      className={styles.user_form}
      onSubmit={onSubmit}
    >
      <TextBox
        register={register('name', {
          required: 'nameは必須です',
          maxLength: { value: 20, message: '最大長は20文字です' },
        })}
      />
      <div>{errors.name?.message}</div>
      <TextBox
        register={register('birthday', {
          required: 'birthdayは必須です',
          maxLength: { value: 20, message: '最大長は20文字です' },
        })}
      />
      <div>{errors.birthday?.message}</div>
      <SubmitButton
        label="送信"
        onSubmit={onSubmit}
        disabled={!isValid}
      />
    </form>
  );
};
