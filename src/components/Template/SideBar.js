import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/ahmed.png`} alt="" />
      </Link>
      <header>
        <h2>Ahmed Belhareth</h2>
        <p><a href="Ahmedbelhareth04@gmail.com">Ahmedbelhareth@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ahmed. I like building things.
        I am a student in second year computer science, ISI-Ariana, and
        the president and founder of <a href="https://www.facebook.com/codexjuniorentreprise">codex junior entreprise association </a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
