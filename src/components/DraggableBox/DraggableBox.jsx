import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import Draggable from 'gsap/Draggable';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
import PageDescription from '../PageDescription/PageDescription';
import './DraggableBox.scss';

gsap.registerPlugin(Draggable);

function DraggableBox() {
  const boxesContainer = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.boxes__box');
      Draggable.create(boxes[0], {
        bounds: boxesContainer,
        edgeResistance: 0,
        type: 'x,y',
        inertia: true,
        autoScroll: true,
      });
    }, boxesContainer);
    return () => ctx.revert();
  });
  return (
    <Container className='animation draggable'>
      <PageTitle title='Draggable' />
      <PageDescription
        description='Provides a surprisingly simple way to make virtually any DOM element draggable, spinnable, tossable, and even flick-scrollable using mouse and/or touch events, plus Draggable integrates beautifully (and optionally) with InertiaPlugin so that the user can flick and have the motion decelerate smoothly based on momentum.'
        docLink='https://greensock.com/docs/v3/Plugins/Draggable'
      />
      <div className='boxes' ref={boxesContainer}>
        <div className='boxes__box'>Drag me</div>
      </div>
    </Container>
  );
}

export default DraggableBox;
