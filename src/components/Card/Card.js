import React from 'react';
import classes from './Card.module.css';

const card = (props) => {
  return (
    <div className={classes.Card} onClick={props.clicked}>
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <p>{props.memo}</p>
    </div>
  );
};

export default card;
