import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import PageDescription from '../PageDescription/PageDescription';
import './MatchMedia.scss';

function MatchMedia() {
  const boxContainer = useRef();
  const tl = useRef();
  useLayoutEffect(() => {
    let mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context((self) => {
        const boxes = self.selector('.boxes__box');
        const size = boxContainer.current.scrollWidth - 100;
        tl.current = gsap
          .timeline()
          .to(boxes[1], { x: size, duration: 2 })
          .to(boxes[1], { rotate: 360, duration: 2 }, '<')
          .to(boxes[1], { backgroundColor: '#e11d48', duration: 2 }, '<')
          .repeat(-1)
          .yoyo(true);
      }, boxContainer);
      return () => ctx.revert();
    });
    mm.add('(max-width: 767px)', () => {
      const ctx = gsap.context((self) => {
        const boxes = self.selector('.boxes__box');
        const size = boxContainer.current.scrollWidth - 100;
        tl.current = gsap
          .timeline()
          .to(boxes[0], { x: size, duration: 2 })
          .to(boxes[0], { rotate: 360, duration: 2 }, '<')
          .to(boxes[0], { backgroundColor: '#e11d48', duration: 2 }, '<')
          .repeat(-1)
          .yoyo(true);
      }, boxContainer);
      return () => ctx.revert();
    });
  });
  return (
    <Container className='animation matchmedia'>
      <PageTitle title='Responsive Controls' />
      <PageDescription
        description='GSAP provides us a way to add responsiveness to our animation using .matchMedia(). I can not only help us create responsive animation but also help us to respect user preferences like prefers-reduce-motion which helps with accessibility.'
        docLink='https://greensock.com/docs/v3/GSAP/gsap.matchMedia()'
      />
      <div className='boxes' ref={boxContainer}>
        <h2>Resize the window to see the change</h2>
        <div className='boxes__box'>Mobile</div>
        <div className='boxes__box'>Desktop</div>
      </div>
    </Container>
  );
}

export default MatchMedia;
