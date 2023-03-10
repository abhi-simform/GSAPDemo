import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './ExampleLayout.scss';

function ExampleLayout() {
  return (
    <div className='basic'>
      <Header />
      <Outlet />
    </div>
  );
}

export default ExampleLayout;
