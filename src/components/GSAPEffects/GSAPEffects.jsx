import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import './GSAPEffects.scss';

function GSAPEffects() {
  const boxesContainer = useRef();
  const tl = useRef();
  gsap.registerEffect({
    name: 'fade',
    effect: (target, config) => {
      return gsap.to(target, { duration: config.duration, rotate: 360 });
    },
    defaults: { duration: 2 },
    extendTimeline: true,
  });
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.boxes__box');
      tl.current = gsap
        .timeline()
        .fade(boxes[0], { duration: 0.5 })
        .fade(boxes[1], { duration: 0.5 })
        .fade(boxes[2], { duration: 0.5 })
        .fade(boxes[3], { duration: 0.5 })
        .fade(boxes[4], { duration: 0.5 })
        .fade(boxes[5], { duration: 0.5 })
        .fade(boxes[6], { duration: 0.5 })
        .fade(boxes[7], { duration: 0.5 })
        .fade(boxes[8], { duration: 0.5 })
        .fade(boxes[9], { duration: 0.5 })
        .fade(boxes[10], { duration: 0.5 })
        .fade(boxes[11], { duration: 0.5 })
        .reverse()
        .repeat(-1)
        .yoyo(true);
    }, boxesContainer);
    return () => ctx.revert();
  });
  return (
    <Container className='gsapeffects'>
      <PageTitle title='GSAP Effects' />
      <div className='boxes' ref={boxesContainer}>
        <div className='boxes__box'>1</div>
        <div className='boxes__box'>2</div>
        <div className='boxes__box'>3</div>
        <div className='boxes__box'>4</div>
        <div className='boxes__box'>5</div>
        <div className='boxes__box'>6</div>
        <div className='boxes__box'>7</div>
        <div className='boxes__box'>8</div>
        <div className='boxes__box'>9</div>
        <div className='boxes__box'>10</div>
        <div className='boxes__box'>11</div>
        <div className='boxes__box'>12</div>
      </div>
    </Container>
  );
}

export default GSAPEffects;
