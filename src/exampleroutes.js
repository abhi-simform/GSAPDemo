import AnimatedCard from './components/AnimatedCard/AnimatedCard';
import ClickTrigger from './components/ClickTrigger/ClickTrigger';
import ScrollTrigger from './components/ScrollTrigger/ScrollTrigger';
import GSAPEffects from './components/GSAPEffects/GSAPEffects';
import GlobalTimeline from './components/GlobalTimeline/GlobalTimeline';
import FromToSet from './components/FromToSet/FromToSet';
import MatchMedia from './components/MatchMedia/MatchMedia';
import TweenMethods from './components/TweenMethods/TweenMethods';
import Eases from './components/Eases/Eases';
import DraggableBox from './components/DraggableBox/DraggableBox';
import FlipElements from './components/FlipElements/FlipElements';

export const exampleroutes = [
  {
    name: 'From, To & Set',
    path: 'fromtoset',
    component: FromToSet,
    newTab: false,
  },
  {
    name: 'Other Tween Methods',
    path: 'tweenmethods',
    component: TweenMethods,
    newTab: false,
  },
  {
    name: 'GSAP Effects',
    path: 'gsapeffects',
    component: GSAPEffects,
    newTab: false,
  },
  {
    name: 'Eases',
    path: 'eases',
    component: Eases,
    newTab: false,
  },
  {
    name: 'Global Timeline',
    path: 'globaltimeline',
    component: GlobalTimeline,
    newTab: false,
  },
  {
    name: 'Responsive Controls',
    path: 'matchmedia',
    component: MatchMedia,
    newTab: false,
  },
  {
    name: 'Trigger on Click',
    path: 'clicktrigger',
    component: ClickTrigger,
    newTab: false,
  },
  {
    name: 'Trigger on Scroll',
    path: 'scrolltrigger',
    component: ScrollTrigger,
    newTab: false,
  },
  {
    name: 'Smooth scroll',
    path: 'https://stackblitz.com/edit/react-gbszpf',
    newTab: true,
  },
  {
    name: 'Draggable Box',
    path: 'draggable',
    component: DraggableBox,
    newTab: false,
  },
  {
    name: 'Flip Plugin',
    path: 'flip',
    component: FlipElements,
    newTab: false,
  },
  {
    name: 'SVG Drawing',
    path: 'https://stackblitz.com/edit/react-hbnsjd',
    newTab: true,
  },
  {
    name: 'Inertia Plugin',
    path: 'https://stackblitz.com/edit/react-vu1nuo',
    newTab: true,
  },
  {
    name: 'Morph SVG Plugin',
    path: 'https://stackblitz.com/edit/react-c1rpms',
    newTab: true,
  },
  {
    name: 'Physics2D Plugin',
    path: 'https://stackblitz.com/edit/react-k1z3n1',
    newTab: true,
  },
  {
    name: 'Animated Card',
    path: 'animatedcard',
    component: AnimatedCard,
    newTab: false,
  },
];
