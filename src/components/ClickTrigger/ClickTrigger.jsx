import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import PageDescription from '../PageDescription/PageDescription';
import Button from '../Button/Button';
import './ClickTrigger.scss';

function ClickTrigger() {
  const boxescontainer = useRef();
  const tl = useRef();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.boxes__box');
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, '<')
        .to(boxes[2], { y: -166 })
        .reverse();
    }, boxescontainer);
    return () => ctx.revert();
  }, []);
  return (
    <Container className='animation triggeranim'>
      <PageTitle title='Animate on click' />
      <PageDescription
        description='We can control the animation using a trigger with the use of GSAP by creating a function that triggers the animation on a button click'
        docLink='https://stackblitz.com/edit/gsap-react-basic-f48716'
      />
      <div className='trigger'>
        <Button onClick={toggleTimeline} variant='primary'>
          Click here to toggle animation
        </Button>
      </div>
      <div className='boxes' ref={boxescontainer}>
        <div className='boxes__box'>Box 1</div>
        <div className='boxes__box'>Box 2</div>
        <div className='boxes__box'>Box 3</div>
      </div>
    </Container>
  );
}

export default ClickTrigger;
