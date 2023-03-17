import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import PageDescription from '../PageDescription/PageDescription';
import './FromToSet.scss';

function FromToSet() {
  const boxContainer = useRef();
  const tl = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const size = boxContainer.current.scrollWidth - 100;
      const boxes = self.selector('.boxes__box');
      tl.current = gsap
        .timeline()
        .from(boxes[0], { x: size, duration: 2 }, '<')
        .from(boxes[0], { rotate: 360, duration: 2 }, '<')
        .from(boxes[0], { backgroundColor: '#e11d48', duration: 2 }, '<')
        .repeat(-1)
        .yoyo(true);
    }, boxContainer);
    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const size = boxContainer.current.scrollWidth - 100;
      const boxes = self.selector('.boxes__box');
      tl.current = gsap
        .timeline()
        .to(boxes[1], { x: size, duration: 2 }, '<')
        .to(boxes[1], { rotate: 360, duration: 2 }, '<')
        .to(boxes[1], { backgroundColor: '#e11d48', duration: 2 }, '<')
        .repeat(-1)
        .yoyo(true);
    }, boxContainer);
    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const size = boxContainer.current.scrollWidth - 100;
      const boxes = self.selector('.boxes__box');
      tl.current = gsap
        .timeline()
        .set(boxes[2], { x: size, delay: 2 }, '<')
        .set(boxes[2], { rotate: 360 }, '<')
        .set(boxes[2], { backgroundColor: '#e11d48' }, '<')
        .set(boxes[2], { x: 0, delay: 2 }, '<')
        .repeat(-1)
        .yoyo(false);
    }, boxContainer);
    return () => ctx.revert();
  }, []);
  return (
    <Container className='fromtoset'>
      <PageTitle title='From, To and Set Methods' />
      <PageDescription
        description='From, To and Set are the most common methods used to create a tween in GSAP. To animates the element to the declared state, from animated the element from the declared state to its original state, and set is used to set the element to the declared state without animation'
        docLink='https://greensock.com/docs/v3/GSAP'
      />
      <div className='boxes' ref={boxContainer}>
        <h2>From Method</h2>
        <div className='boxes__box'>1</div>
        <h2>To Method</h2>
        <div className='boxes__box'>2</div>
        <h2>Set Method</h2>
        <div className='boxes__box'>3</div>
      </div>
    </Container>
  );
}

export default FromToSet;
