import React from 'react';
import './SearchBox.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';

function SearchBox() {
  return (
    <div className='searchbox-container'>
      <section className='searchbox-subscription'>
        <p className='searchbox-subscription-heading'>
          LETS SEARCH !!
        </p>
        <p className='search-subscription-text'>
          You can search anything you want here.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='searchbox-input'
              name='wordsearch'
              type='text'
              placeholder='Search ... '
            />
            <Button buttonStyle='btn--outline'>SEARCH</Button>
          </form> 
          <Link to='/AddData'>
        <Button buttonSize='btn--medium' buttonColor='green'>ADD DATA</Button>
      </Link>                
          
        </div>
      </section>
    </div>
  );
}

export default SearchBox;