import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Footer from '../Footer.js/Footer';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import './Search.css'



function Search({
buttonLabelAdd,
  
}) {

  return (
    <>
      <Footer />
      <Link to='/AddData'>
        <Button buttonSize='btn--right' buttonColor='green'>ADD DATA</Button>
      </Link>
      
      
    </>
  );
}



export default Search;