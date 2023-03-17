import AnimatedCard from './components/AnimatedCard/AnimatedCard';
import ClickTrigger from './components/ClickTrigger/ClickTrigger';
import ScrollTrigger from './components/ScrollTrigger/ScrollTrigger';
import GSAPEffects from './components/GSAPEffects/GSAPEffects';
import GlobalTimeline from './components/GlobalTimeline/GlobalTimeline';
import FromToSet from './components/FromToSet/FromToSet';
import MatchMedia from './components/MatchMedia/MatchMedia';

export const exampleroutes = [
  {
    name: 'Animated Card',
    path: 'animatedcard',
    component: AnimatedCard,
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
    name: 'GSAP Effects',
    path: 'gsapeffects',
    component: GSAPEffects,
    newTab: false,
  },
  {
    name: 'Global Timeline',
    path: 'globaltimeline',
    component: GlobalTimeline,
    newTab: false,
  },
  {
    name: 'From, To & Set',
    path: 'fromtoset',
    component: FromToSet,
    newTab: false,
  },
  {
    name: 'Responsive Controls',
    path: 'matchmedia',
    component: MatchMedia,
    newTab: false,
  },
];
