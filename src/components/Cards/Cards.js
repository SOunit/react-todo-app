import React from 'react';
import Card from './Card/Card';
import * as consts from '../../const/const';

const cards = (props) => {
  let cardList = null;
  if (props.cardList && props.cardList.length > 0) {
    cardList = [...props.cardList];
    cardList = cardList.map((el, index) => {
      return (
        <Card
          title={el.title}
          memo={el.memo}
          date={el.date}
          status={el.status}
          onDelete={() => props.onChange(index, consts.CARD_STATUS_DELETE)}
          onSuccess={() => props.onChange(index, consts.CARD_STATUS_SUCCESS)}
          onBack={() => props.onChange(index, consts.CARD_STATUS_CREATED)}
          onMove={() => props.onMove(index)}
          key={index}
        />
      );
    });
  }
  return <div>{cardList}</div>;
};

export default cards;
