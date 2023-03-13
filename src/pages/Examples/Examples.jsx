import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import { exampleroutes } from '../../exampleroutes';
import './Examples.scss';

function Examples() {
  return (
    <Container className='examples basic__page'>
      <h1>Examples</h1>
      <div className='links'>
        {exampleroutes?.map((link, index) => {
          const { name, path } = link;
          return (
            <Link key={index} className='links__item' to={path}>
              {name}
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

export default Examples;
