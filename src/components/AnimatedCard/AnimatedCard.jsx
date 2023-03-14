import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import './AnimatedCard.scss';

function AnimatedCard() {
  const screen = useRef();
  const tl = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const overlay = self.selector('.screen__overlay');
      tl.current = gsap.timeline().to(overlay, { backgroundPosition: '0% -100%', duration: 22, ease: 'none' }).repeat(-1);
    }, screen);
    return () => ctx.revert();
  }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const image = self.selector('.screen__image');
      tl.current = gsap
        .timeline()
        .to(image, { backgroundPosition: '36% 42%', backgroundSize: '200%', duration: 0, ease: 'none' })
        .to(image, { backgroundPosition: '30% 35%', backgroundSize: '200%', duration: 3, ease: 'none' })
        .to(image, { backgroundPosition: '60% 85%', backgroundSize: '500%', duration: 0, ease: 'none' })
        .to(image, { backgroundPosition: '49% 81%', backgroundSize: '500%', duration: 3, ease: 'none' })
        .to(image, { backgroundPosition: '80% 42%', backgroundSize: '300%', duration: 0, ease: 'none' })
        .to(image, { backgroundPosition: '84% 33%', backgroundSize: '300%', duration: 3, ease: 'none' })
        .to(image, { backgroundPosition: '0% 0%', backgroundSize: '300%', duration: 0, ease: 'none' })
        .to(image, { backgroundPosition: '15% 4%', backgroundSize: '300%', duration: 3, ease: 'none' })
        .to(image, { backgroundPosition: '80% 10%', backgroundSize: '300%', duration: 0, ease: 'none' })
        .to(image, { backgroundPosition: '72% 14%', backgroundSize: '300%', duration: 3, ease: 'none' })
        .repeat(-1);
    }, screen);
    return () => ctx.revert();
  }, []);
  return (
    <Container>
      <PageTitle title='Animated Card' />
      <div className='screen' ref={screen}>
        <div className='screen__image'></div>
        <div className='screen__overlay'></div>
      </div>
    </Container>
  );
}

export default AnimatedCard;
