import React from 'react';
import '../styles/App.css';
import headshot from '../images/DSC_2687.jpg';

function Contact() {
  return (
    <div className='contact-container'>
      <div className='contact-info'>
        <h1>Contact the Engineer</h1>
        <h2 className='my-name'>Jake McInerney</h2>
        <img className='headshot' src={headshot} alt='headshot'></img>
        <h3>Github</h3>
        <a href='https://github.com/mcinerneyjake' className='contact-link'>
          github.com/mcinerneyjake
        </a>
        <h3>LinkedIn</h3>
        <a href='https://www.linkedin.com/in/mcinerney-jake/' className='contact-link'>
          linkedin.com/in/mcinerney-jake
        </a>
      </div>
    </div>
  );
}

export default Contact;
