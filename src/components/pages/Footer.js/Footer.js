import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          LETS SEARCH !!
        </p>
        <p className='footer-subscription-text'>
          You can search anything you want here.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='wordsearch'
              type='text'
              placeholder='Search ... '
            />
            <Button buttonStyle='btn--outline'>SEARCH</Button>
          </form>                 
          
        </div>
      </section>
    </div>
  );
}

export default Footer;