import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setTodo = (todo) => {
  return {
    type: actionTypes.SET_TODO,
    todo: todo,
  };
};

export const initTodo = () => {
  return (dispatch) => {
    axios
      .get('https://react-todo-app-57b96.firebaseio.com/todoList.json')
      .then((res) => {
        dispatch(setTodo(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
