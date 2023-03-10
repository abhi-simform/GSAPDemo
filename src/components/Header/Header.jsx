import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Container from '../Container/Container';
import './Header.scss';

function Header() {
  const header = useRef();
  const tl = useRef();

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed());
  };

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const navbar = self.selector('#nav');
      const lines = self.selector('.line');
      tl.current = gsap
        .timeline()
        .from(navbar, { x: '-100%', duration: 0.3 })
        .to(lines[0], { y: 8, duration: 0.15 }, '<')
        .to(lines[2], { y: -8, duration: 0.15 }, '<')
        .to(lines[1], { opacity: 0, duration: 0.15 }, '<')
        .to(lines[0], { rotate: '45deg', duration: 0.15 })
        .to(lines[2], { rotate: '-45deg', duration: 0.15 }, '<')
        .reverse();
    }, header);
    return () => ctx.revert();
  }, []);

  return (
    <header className='header' ref={header}>
      <Container className='header-container'>
        <span className='header__logo'>GSAP</span>
        <div className='hamburger' onClick={toggleTimeline}>
          <div className='line' />
          <div className='line' />
          <div className='line' />
        </div>
        <nav className='nav' id='nav'>
          <ul className='nav__list'>
            <li>
              <Link onClick={toggleTimeline} to='/'>Home</Link>
            </li>
            <li>
              <Link onClick={toggleTimeline} to='/examples'>Examples</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
