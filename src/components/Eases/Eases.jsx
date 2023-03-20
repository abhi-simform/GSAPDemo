import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import PageDescription from '../PageDescription/PageDescription';
import './Eases.scss';

function Eases() {
  const boxContainer = useRef();
  const tl = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.boxes__box');
      const size = boxContainer.current.scrollWidth - 50;
      const eases = [
        'none',
        'power1',
        'power2',
        'power3',
        'power4',
        'back',
        'elastic',
        'bounce',
        'rough',
        'slow',
        'steps(10)',
        'circ.out',
        'expo',
        'sine',
        `CustomEase.create("custom", "M0,0 C0,0.408 0.687,0.242 0.74,0.294 0.791,0.345 0.584,1 1,1 ")`,
      ];
      boxes.forEach((box, index) => {
        tl.current = gsap.timeline().to(box, { x: size, duration: 10, ease: eases[index] }).repeat(-1).yoyo(true);
        console.log(eases[index]);
      });
    }, boxContainer);
    return () => ctx.revert();
  });
  return (
    <Container className='animation eases'>
      <PageTitle title='Eases' />
      <PageDescription
        description='Easing is the primary way to change the timing of your tweens. Simply changing the ease can often times change the entire nature of your animation. But because there are infinite eases that you can use in GSAP, we created the visualizer below to help you choose exactly the type of easing that you need.'
        docLink='https://greensock.com/docs/v3/Eases'
      />
      <div className='boxes' ref={boxContainer}>
        <div className='box--wrapper'>
          <h2>None</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Power 1</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Power 2</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Power 3</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Power 4</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Back</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Elastic</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Bounce</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Rough</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Slow</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Step</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Circ</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Expo</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Sine</h2>
          <div className='boxes__box'></div>
        </div>
        <div className='box--wrapper'>
          <h2>Custom</h2>
          <div className='boxes__box'></div>
        </div>
      </div>
    </Container>
  );
}

export default Eases;
