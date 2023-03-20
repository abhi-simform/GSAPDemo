import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import PageDescription from '../PageDescription/PageDescription';
import './TweenMethods.scss';

function TweenMethods() {
  const boxContainer = useRef();
  const tl = useRef();
  useLayoutEffect(() => {
    const size = boxContainer.current.scrollWidth - 100;
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.boxes__box');
      tl.current = gsap.timeline().to(boxes[0], { x: size, duration: 5, ease: 'linear' }).delay(5);
      tl.current = gsap.timeline().to(boxes[1], { x: size, ease: 'linear' }).duration(10);
      tl.current = gsap.timeline().to(boxes[2], { x: size, duration: 10, ease: 'linear' }).play(5);
      tl.current = gsap.timeline().to(boxes[3], { x: size, duration: 10, ease: 'linear' }).pause(5);
      tl.current = gsap.timeline().to(boxes[4], { x: size, duration: 10, ease: 'linear' }).repeat(5);
      tl.current = gsap.timeline().to(boxes[5], { x: size, duration: 10, ease: 'linear' }).repeat(5).repeatDelay(5);
      tl.current = gsap.timeline().to(boxes[6], { x: size, duration: 10, ease: 'linear' }).reverse(5);
      tl.current = gsap.timeline().to(boxes[7], { x: size, duration: 10, ease: 'linear' }).repeat(-1).yoyo(true);
    }, boxContainer);
    return () => ctx.revert();
  });
  return (
    <Container className='tweenmethods'>
      <PageTitle title='Tween Methods' />
      <PageDescription
        description='A Tween is what does all the animation work - think of it like a high-performance property setter. You feed in targets (the objects you want to animate), a duration, and any properties you want to animate and when its playhead moves to a new position, it figures out what the property values should be at that point applies them accordingly.'
        docLink='https://greensock.com/docs/v3/GSAP/Tween'
      />
      <div className='boxes' ref={boxContainer}>
        <div className='box--wrapper'>
          <h2>.delay()</h2>
          <p>Gets or sets the animation's initial delay which is the length of time in seconds before the animation should begin.</p>
          <div className='boxes__box'>Delay</div>
        </div>
        <div className='box--wrapper'>
          <h2>.duration()</h2>
          <p>Gets or sets the animation's duration, not including any repeats or repeatDelays.</p>
          <div className='boxes__box'>Duration</div>
        </div>
        <div className='box--wrapper'>
          <h2>.play()</h2>
          <p>Begins playing forward, optionally from a specific time (by default playback begins from wherever the playhead currently is).</p>
          <div className='boxes__box'>Play</div>
        </div>
        <div className='box--wrapper'>
          <h2>.pause()</h2>
          <p>Pauses the instance, optionally jumping to a specific time.</p>
          <div className='boxes__box'>Pause</div>
        </div>
        <div className='box--wrapper'>
          <h2>.repeat()</h2>
          <p>Gets or sets the number of times that the tween should repeat after its first iteration.</p>
          <div className='boxes__box'>Repeat</div>
        </div>
        <div className='box--wrapper'>
          <h2>.repeatDelay()</h2>
          <p>Gets or sets the amount of time in seconds between repeats.</p>
          <div className='boxes__box'>Repeat Delay</div>
        </div>
        <div className='box--wrapper'>
          <h2>.reverse()</h2>
          <p>Reverses playback so that all aspects of the animation are oriented backwards including, for example, a tween's ease.</p>
          <div className='boxes__box'>Reverse</div>
        </div>
        <div className='box--wrapper'>
          <h2>.yoyo()</h2>
          <p>
            Gets or sets the tween's yoyo state, where true causes the tween to go back and forth, alternating backward and forward on each repeat.
          </p>
          <div className='boxes__box'>Yoyo</div>
        </div>
      </div>
    </Container>
  );
}

export default TweenMethods;
