import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './BasicLayout.scss';

function BasicLayout() {
  return (
    <div className='basic'>
      <Header />
      <Outlet />
    </div>
  );
}

export default BasicLayout;
