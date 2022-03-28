import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';
import img2 from '../layouts/rocket.gif';
import img1 from '../layouts/codexers.jpg';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Ahmed Belhareth"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to Call me 54-504-138 and You can email me at: </p>
        <EmailLink />
      </div>
      <header>
        <div className="title">
          <h1 data-testid="heading"><Link to="/contact">Social media contact</Link></h1>
        </div>
      </header>
      <ContactIcons />
      <Link to="/" className="logo">
        <img src={img2} height={200} width={200} alt="" />
      </Link>
    </article>
    <Link to="/" className="logo">
      <img src={img1} height={500} width={800} alt="" />
    </Link>
  </Main>
);

export default Contact;
