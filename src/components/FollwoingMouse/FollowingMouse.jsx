import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import PageDescription from '../PageDescription/PageDescription';
import './FollowingMouse.scss';

function FollowingMouse() {
  const anim = useRef();
  const tl = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const circle = document.getElementById('circle');
      const onMove = ({ clientX, clientY }) => {
        tl.current = gsap.timeline().to(circle, { x: clientX - 24, y: clientY - 24, transformOrigin: 'center center'});
      };
      window.addEventListener('pointermove', onMove);
    }, anim);
    return () => ctx.revert();
  }, []);
  return (
    <Container className='animation following mouse' ref={anim}>
      <PageTitle title='From, To and Set Methods' />
      <PageDescription description='Animated elements using GSAP to follow mouse pointer on screen.' />
      <div id='circle'></div>
    </Container>
  );
}

export default FollowingMouse;
