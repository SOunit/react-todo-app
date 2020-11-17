const initialState = {
  todoList: [{ date: 'aaa', memo: 'memo', status: 3, title: 'to do item' }],
  deleteList: [{ date: 'aaa', memo: 'memo', status: 3, title: 'delete item' }],
  successList: [
    { date: 'aaa', memo: 'memo', status: 3, title: 'success item' },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
