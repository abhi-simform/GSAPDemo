import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Container from '../Container/Container';
import Button from '../Button/Button';
import PageTitle from '../PageTitle/PageTitle';
import PageDescription from '../PageDescription/PageDescription';
import './GlobalTimeline.scss';

function GlobalTimeline() {
  const box = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.boxes__box');
      const content = self.selector('.content');
      const size = box.current.scrollWidth - 96;
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: size, duration: 2, delay: 1 })
        .to(boxes[0], { rotate: 360, duration: 2 }, '<')
        .to(boxes[0], { backgroundColor: '#e11d48', duration: 2 }, '<')
        .to(content[0], { rotate: -360, duration: 2 }, '<')
        .to(boxes[1], { x: size, duration: 2 })
        .to(boxes[1], { rotate: 360, duration: 2 }, '<')
        .to(boxes[1], { backgroundColor: '#e11d48', duration: 2 }, '<')
        .to(content[1], { rotate: -360, duration: 2 }, '<')
        .to(boxes[2], { x: size, duration: 2 })
        .to(boxes[2], { rotate: 360, duration: 2 }, '<')
        .to(boxes[2], { backgroundColor: '#e11d48', duration: 2 }, '<')
        .to(content[2], { rotate: -360, duration: 2 }, '<')
        .repeat(-1)
        .yoyo(true);
    }, box);
    return () => ctx.revert();
  }, []);
  return (
    <Container className='globaltimeline'>
      <PageTitle title='Global Timeline' />
      <PageDescription
        description='GSAP provides a utility to control the play state of the global timeline using the globalTimeline utility function.'
        docLink='https://greensock.com/docs/v3/GSAP/gsap.globalTimeline'
      />
      <div className='boxes' ref={box}>
        <div className='boxes__box'>
          <span className='content'>1</span>
        </div>
        <div className='boxes__box'>
          <span className='content'>2</span>
        </div>
        <div className='boxes__box'>
          <span className='content'>3</span>
        </div>
      </div>
      <div className='buttons'>
        <Button onClick={() => gsap.globalTimeline.pause()}>Pause Animation</Button>
        <Button onClick={() => gsap.globalTimeline.timeScale(0.5)}>Slow Animation Down</Button>
        <Button onClick={() => gsap.globalTimeline.timeScale(1)}>Reset Animation Speed</Button>
        <Button onClick={() => gsap.globalTimeline.timeScale(2)}>Make Animation Faster</Button>
        <Button onClick={() => gsap.globalTimeline.play()}>Play Animation</Button>
      </div>
    </Container>
  );
}

export default GlobalTimeline;
