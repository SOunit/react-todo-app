import React from 'react';
import classes from './CardAddController.module.css';

const cardAddController = (props) => {
  return (
    <div>
      <div>
        <label for="title" className={classes.Label}>
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={props.title}
          onInput={props.onTitleInput}
          className={classes.Input}
        ></input>
      </div>
      <div>
        <label for="memo" className={classes.Label}>
          Memo
        </label>
        <input
          type="text"
          name="memo"
          id="memo"
          value={props.memo}
          onInput={props.onMemoInput}
          className={classes.Input}
        ></input>
      </div>
      <input
        type="button"
        value="Add"
        onClick={props.onAdd}
        className={classes.Button}
      />
    </div>
  );
};

export default cardAddController;
