import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const header = (props) => {
  return (
    <header class={classes.header}>
      <nav>
        <NavLink to="/" className={classes.Logo}>
          <h1>To do {props.title}</h1>
        </NavLink>
        <NavLink to="/" exact activeClassName={classes.active}>
          Todo
        </NavLink>
        <NavLink to="/done" activeClassName={classes.active}>
          Done
        </NavLink>
        <NavLink to="/delete" activeClassName={classes.active}>
          Delete
        </NavLink>
      </nav>
    </header>
  );
};

export default header;
