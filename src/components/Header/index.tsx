import React from 'react'
import './header.scss';

export const Header = () => {
  return (
    <section className="rd-header--container">
        <ul className="rd-header--menu">
            <li>Intro</li>
            <li>About</li>
            <li>Featured</li>
        </ul>
        <h1 id='rd-header--text'>Art Object</h1>
    </section>
  )
}
