import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '../../components/Container/Container';
import './Home.scss';

function Home() {
  const box = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.box');
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
        .to(boxes[0], { y: 224, duration: 1 })
        .to(boxes[2], { y: -224, duration: 1 })
        .to(boxes[2], { x: 0, duration: 2 })
        .to(boxes[2], { rotate: -360, duration: 2 }, '<')
        .to(boxes[2], { backgroundColor: '#9333ea', duration: 2 }, '<')
        .to(content[2], { rotate: 360, duration: 2 }, '<')
        .to(boxes[1], { x: 0, duration: 2 })
        .to(boxes[1], { rotate: -360, duration: 2 }, '<')
        .to(boxes[1], { backgroundColor: '#9333ea', duration: 2 }, '<')
        .to(content[1], { rotate: 360, duration: 2 }, '<')
        .to(boxes[0], { x: 0, duration: 2 })
        .to(boxes[0], { rotate: -360, duration: 2 }, '<')
        .to(boxes[0], { backgroundColor: '#9333ea', duration: 2 }, '<')
        .to(content[0], { rotate: 360, duration: 2 }, '<')
        .repeat(-1)
        .yoyo(true);
    }, box);
    return () => ctx.revert();
  }, []);
  return (
    <Container className='home basic__page'>
      <h1>Basic GSAP demo</h1>
      <div className='boxes' ref={box}>
        <div className='box'>
          <span className='content'>1</span>
        </div>
        <div className='box'>
          <span className='content'>2</span>
        </div>
        <div className='box'>
          <span className='content'>3</span>
        </div>
      </div>
    </Container>
  );
}

export default Home;
