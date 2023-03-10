import { Link, Outlet } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import './ExampleLayout.scss';

function ExampleLayout() {
  return (
    <div className='example'>
      <Header />
      <Container>
        <Link to='/examples' className='example__backlink'>
          <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
            <path d='m9 19-7-7 7-7 1.425 1.4-4.6 4.6H22v2H5.825l4.575 4.6Z' />
          </svg>
          <span>Back to examples list</span>
        </Link>
      </Container>
      <Outlet />
    </div>
  );
}

export default ExampleLayout;
