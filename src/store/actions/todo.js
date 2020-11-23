import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setTodo = (todo) => {
  return {
    type: actionTypes.SET_TODO,
    todo: todo,
  };
};

export const addTodo = (todo) => {
  console.log('[action] add todo');
  console.log(todo);
  return {
    type: actionTypes.ADD_TODO,
    todo: todo,
  };
};

export const initTodo = () => {
  console.log('[init todo]');
  return {
    type: actionTypes.SET_TODO,
  };
};
