import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import img1 from '../layouts/stay-home.png';
import img2 from '../layouts/social-care.gif';

const Index = () => (
  <Main
    description={"Ahmed belhareth's personal website.  "
    + 'codex junior entreprise founder'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            My CV in a creative way .
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <Link to="/" className="logo">
        <img src={img2} height={200} width={200} alt="" />
      </Link>
    </article>
    <Link to="/" className="logo">
      <img src={img1} height={200} width={200} alt="" />
    </Link>
  </Main>
);

export default Index;
