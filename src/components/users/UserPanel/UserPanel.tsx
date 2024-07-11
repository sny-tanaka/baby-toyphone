import styles from './style.module.scss';

type Props = {
  id: string;
  name: string;
};

export const UserPanel = ({ id, name }: Props) => {
  return (
    <div className={styles.user_panel}>
      <div>{id}</div>
      <div>{name}</div>
    </div>
  );
};
