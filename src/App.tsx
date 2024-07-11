import { Route, Routes } from 'react-router-dom';

import { useSetRecoilState } from 'recoil';

import styles from './App.module.scss';
import { AuthAtom } from './recoil/auth';

import { Footer } from '@/layouts/footer/Footer';
import { Header } from '@/layouts/header/Header';
import { Page as NotFoundPage } from '@/pages/not-found';
import { Page as RootPage } from '@/pages/root';
import { Page as UsersPage } from '@/pages/users';

function App(): JSX.Element {
  // globalなstateはrecoilで管理する
  const setAuth = useSetRecoilState(AuthAtom);
  // 認証情報をセットする（本来はログイン後などに実行する）
  setAuth({
    id: '1',
    name: 'test',
    isAdmin: true,
  });

  return (
    <div className={styles.main}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<RootPage />}
        />
        <Route
          path="/users"
          element={<UsersPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
