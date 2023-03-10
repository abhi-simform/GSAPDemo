import Container from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import './Examples.scss';

function Examples() {
  return (
    <Container className='examples basic__page'>
      <h1>Examples</h1>
      <div className='links'>
        <Link className='links__item' to='/examples/animatedcard'>
          Animated Card
        </Link>
      </div>
    </Container>
  );
}

export default Examples;
