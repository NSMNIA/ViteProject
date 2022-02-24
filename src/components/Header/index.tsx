import React, { useEffect } from 'react'
import './header.scss';
import gsap from 'gsap';

export const Header = () => {
  useEffect(()=>{
    gsap.from('#rd-header--text', {
      duration: 1,
      y: 30,
      opacity: 0,
      stagger: .1,
      ease: 'power2'
    })
  }, []);
  return (
    <section className="rd-header--container" data-scroll-section>
        <ul className="rd-header--menu">
            <li>Intro</li>
            <li>Featured</li>
            <li>About</li>
        </ul>
        <h1 id='rd-header--text'>Art Object</h1>
    </section>
  )
}
