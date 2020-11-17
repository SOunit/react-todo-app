import React from 'react';
import classes from './Card.module.css';
import * as consts from '../../../const/const';

const card = (props) => {
  // setup class name
  let cardClassList = [classes.Card];
  let buttonClassList = [classes.Button];
  switch (props.status) {
    case consts.CARD_STATUS_CREATED:
      cardClassList.push(classes.Created);
      buttonClassList.push(classes.Created);
      break;
    case consts.CARD_STATUS_SUCCESS:
      cardClassList.push(classes.Success);
      buttonClassList.push(classes.Success);
      break;
    case consts.CARD_STATUS_DELETE:
      cardClassList.push(classes.Delete);
      buttonClassList.push(classes.Delete);
      break;
    default:
      break;
  }
  cardClassList = cardClassList.join(' ');
  buttonClassList = buttonClassList.join(' ');

  // set up buttons
  let buttons = (
    <div>
      <button className={classes.Success} onClick={props.onSuccess}>
        Success
      </button>
      <button className={classes.Delete} onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );

  if (props.status !== consts.CARD_STATUS_CREATED) {
    buttons = (
      <div>
        <button className={buttonClassList} onClick={props.onMove}>
          Move
        </button>
        <button className={buttonClassList} onClick={props.onBack}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className={cardClassList}>
      <div>
        <h2>{props.title}</h2>
        <p>{props.date}</p>
        <p>{props.memo}</p>
      </div>
      {buttons}
    </div>
  );
};

export default card;
