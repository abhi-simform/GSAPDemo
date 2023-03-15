import AnimatedCard from './components/AnimatedCard/AnimatedCard';
import ClickTrigger from './components/ClickTrigger/ClickTrigger';
import ScrollTrigger from './components/ScrollTrigger/ScrollTrigger';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';

export const exampleroutes = [
  {
    name: 'Animated Card',
    path: 'animatedcard',
    component: AnimatedCard,
  },
  {
    name: 'Trigger on Click',
    path: 'clicktrigger',
    component: ClickTrigger,
  },
  {
    name: 'Trigger on Scroll',
    path: 'scrolltrigger',
    component: ScrollTrigger,
  },
  {
    name: 'Smooth scroll',
    path: 'smoothscroll',
    component: SmoothScroll,
  },
];
