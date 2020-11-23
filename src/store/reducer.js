import * as consts from '../const/const';
import * as actionTypes from './actions/actionTypes';

const initialState = {
  todoList: [
    {
      date: 'aaa',
      memo: 'memo',
      status: consts.CARD_STATUS_CREATED,
      title: 'to do item',
    },
  ],
  deleteList: [
    {
      date: 'aaa',
      memo: 'memo',
      status: consts.CARD_STATUS_DELETE,
      title: 'delete item',
    },
  ],
  doneList: [
    {
      date: 'aaa',
      memo: 'memo',
      status: consts.CARD_STATUS_SUCCESS,
      title: 'done item',
    },
  ],
};

const setTodo = (state, action) => {
  return {
    ...state,
  };
};

const addTodo = (state, action) => {
  console.log('[reducer] add todo');
  console.log(action.todo);
  const newTodoList = [...state.todoList];
  console.log(state);
  console.log(state.todoList);
  // const newTodoList = [];
  newTodoList.push(action.todo);
  return {
    ...state,
    todoList: newTodoList,
  };
};

const reducer = (state = initialState, action) => {
  console.log('reducer!!!');

  console.log(state);

  switch (action.type) {
    case actionTypes.SET_TODO:
      return setTodo(state, action);
    case actionTypes.ADD_TODO:
      console.log('[reducer add todo]');
      return addTodo(state, action);
    default:
      return state;
  }
};

export default reducer;
