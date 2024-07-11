import { UserForm } from '@/components/users/UserForm/UserForm';
import { UserPanel } from '@/components/users/UserPanel/UserPanel';

export const Page = () => {
  return (
    <div>
      <h1>Users</h1>
      <UserPanel
        id="1"
        name="John"
      />
      <UserPanel
        id="2"
        name="Jane"
      />
      <UserForm />
    </div>
  );
};
