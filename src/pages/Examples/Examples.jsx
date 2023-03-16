import { Link } from 'react-router-dom';
import Container from '../../components/Container/Container';
import PageTitle from '../../components/PageTitle/PageTitle';
import { exampleroutes } from '../../exampleroutes';
import './Examples.scss';

function Examples() {
  return (
    <Container className='examples'>
      <PageTitle title='Examples' />
      <div className='links'>
        {exampleroutes?.map((link, index) => {
          const { name, path, newTab } = link;
          return (
            <Link key={index} className='links__item' to={path} target={newTab ? '_blank' : '_self'}>
              {name}
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

export default Examples;
