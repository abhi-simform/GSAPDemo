import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import Container from '../Container/Container';
import Button from '../Button/Button';
import PageTitle from '../PageTitle/PageTitle';
import './SmoothScroll.scss';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function SmoothScroll() {
  const main = useRef();
  const smoother = useRef();

  const scrollTo = () => {
    smoother.current.scrollTo('.box-c', true, 'center center');
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
      ScrollTrigger.create({
        trigger: '.box-b',
        pin: true,
        start: 'center center',
        end: '+=300',
        markers: true,
      });
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <div className='smoothscroll'>
      <div id='smooth-wrapper' ref={main}>
        <div id='smooth-content'>
          <Container>
            <PageTitle title='Smooth scrolling' />
            <div className='text-center mt-40'>
              <h2 className='mb-16'>Scroll to see the effect</h2>
              <Button onClick={scrollTo}>Jump to C</Button>
            </div>
            <div className='boxes'>
              <div className='boxes__box box-a' data-speed='0.5'>
                box a
              </div>
              <div className='boxes__box box-b' data-speed='0.5'>box b</div>
              <div className='boxes__box box-c'>
                box c
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default SmoothScroll;
