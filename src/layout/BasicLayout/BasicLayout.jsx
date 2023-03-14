import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './BasicLayout.scss';

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default BasicLayout;
