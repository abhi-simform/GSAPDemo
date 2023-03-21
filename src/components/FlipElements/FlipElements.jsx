import gsap from 'gsap';
import Flip from 'gsap/Flip';
import Container from '../Container/Container';
import Button from '../Button/Button';
import PageTitle from '../PageTitle/PageTitle';
import PageDescription from '../PageDescription/PageDescription';
import './FlipElements.scss';

gsap.registerPlugin(Flip);

function FlipElements() {
  function doFlip() {
    const squares = gsap.utils.toArray('.boxes__box');
    const state = Flip.getState(squares);
    swap(squares);
    Flip.from(state, { duration: 2, ease: 'power1.inOut' });
  }
  function swap([a, b]) {
    a.parentNode.children[0] === a ? a.parentNode.appendChild(a) : a.parentNode.appendChild(b);
  }

  function doFlip2() {
    const group = document.querySelector('.group');
    const state = Flip.getState('.group, .box');
    group.classList.toggle('reorder');
    Flip.from(state, {
      absolute: true,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power1.inOut',
    });
  }
  return (
    <Container className='animation flip'>
      <PageTitle title='Flip Elements' />
      <PageDescription
        description='Flip plugin lets you seamlessly transition between two states even if there are sweeping changes to the structure of the DOM that would normally cause elements to jump. Flip records the current position/size/rotation of your elements, then you make whatever changes you want, and then Flip applies offsets to make them LOOK like they never moved/resized/rotated and then animates the removal of those offsets! UI transitions become remarkably simple to code. Flip does all the heavy lifting.'
        docLink='https://greensock.com/docs/v3/Plugins/Flip'
      />
      <div className='mt-16 text-center'>
        <Button onClick={doFlip}>Click Me to Swap </Button>
      </div>
      <div className='boxes'>
        <div className='boxes__box'>1</div>
        <div className='boxes__box'>2</div>
      </div>
      <div className='mt-16 text-center'>
        <Button onClick={doFlip2}>Click Me to Change Direction </Button>
      </div>
      <div className='group boxes boxes--alt'>
        <div className='box'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quis cumque ad quae eius eos animi rerum. Fuga quasi ea neque? Quo
          consequuntur soluta fuga veniam perspiciatis officia quod qui?
        </div>
        <div className='box'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quis cumque ad quae eius eos animi rerum. Fuga quasi ea neque? Quo
          consequuntur soluta fuga veniam perspiciatis officia quod qui?
        </div>
        <div className='box'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quis cumque ad quae eius eos animi rerum. Fuga quasi ea neque? Quo
          consequuntur soluta fuga veniam perspiciatis officia quod qui?
        </div>
      </div>
    </Container>
  );
}

export default FlipElements;
