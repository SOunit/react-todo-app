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
    todo: action.todo,
  };
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case actionTypes.SET_TODO:
      return setTodo(state, action);
    default:
      return state;
  }
};

export default reducer;
