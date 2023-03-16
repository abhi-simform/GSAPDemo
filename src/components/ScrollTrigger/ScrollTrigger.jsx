import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger as ScrollTriggerGsap } from 'gsap/ScrollTrigger';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import './ScrollTrigger.scss';
import PageDescription from '../PageDescription/PageDescription';

gsap.registerPlugin(ScrollTriggerGsap);

function ScrollTrigger() {
  const main = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const size = main.current.scrollWidth - 100;
      const boxes = self.selector('.boxes__box');
      boxes.forEach((box, index) => {
        if (index % 2 === 0) {
          gsap.to(box, {
            x: size,
            scrollTrigger: {
              trigger: box,
              start: 'bottom 90%',
              end: 'top 20%',
              scrub: true,
            },
          });
        } else {
          gsap.to(box, {
            x: -size,
            scrollTrigger: {
              trigger: box,
              start: 'bottom 90%',
              end: 'top 20%',
              scrub: true,
            },
          });
        }
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);
  return (
    <Container className='scrolltrigger'>
      <PageTitle title='Animate on scroll' />
      <PageDescription
        description='We can control the animation using ScrollTriggerGsap plugin. Which means the animation is based on the scroll position of our viewport and the element there are multiple controls provided withing GSAP to achieve the exact effect that we want.'
        docLink='https://stackblitz.com/edit/react-cxv92j'
      />
      <section className='placeholder'>
        <h2>Scroll the page to see the animation</h2>
      </section>
      <div className='boxes' ref={main}>
        <div className='boxes__box 1'>1</div>
        <div className='boxes__box 2'>2</div>
        <div className='boxes__box 3'>3</div>
        <div className='boxes__box 4'>4</div>
        <div className='boxes__box 5'>5</div>
        <div className='boxes__box 6'>6</div>
      </div>
      <section className='placeholder'>
        <h2>Scroll back to see the animation</h2>
      </section>
    </Container>
  );
}

export default ScrollTrigger;
