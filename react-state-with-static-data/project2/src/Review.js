import React, { useState } from 'react';

import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaRegTimesCircle  } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const [people, setPeople] = useState(data);
  const { id, name, job, image, text } = people[index];
  
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
        <span onClick={() => {  setPeople(people.filter((el) => el.id !== id))}} style={{position: 'absolute',top: 0,right: '-150px',cursor: 'po'}}><FaRegTimesCircle/></span>
      </div>
      <h4 className='author'>{id}{': '}{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>          
        surprise me
      </button>
    </article>
  );
};

export default Review;
