import React, { Component } from 'react';
import classes from './EditToDo.module.css';
import axios from 'axios';
import * as consts from '../../const/const';
import CardAddController from '../../components/CardAddController/CardAddController';
import Cards from '../../components/Cards/Cards';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class EditToDo extends Component {
  state = {
    todoList: [{ date: 'aaa', memo: 'memo', status: '3', title: 'to do item' }],
    title: '',
    memo: '',
  };

  getTodoList = () => {
    axios
      .get('https://react-todo-app-57b96.firebaseio.com/todoList.json')
      .then((res) => {
        let dataList = [];
        for (let key in res.data) {
          dataList.push(res.data[key]);
        }
        let todoList = dataList[0];
        this.setState({ todoList: todoList });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount = () => {
    this.getTodoList();
  };

  registDB = (newTodoList, jsonName) => {
    axios
      .delete('https://react-todo-app-57b96.firebaseio.com/' + jsonName)
      .then((res) => {
        axios
          .post(
            'https://react-todo-app-57b96.firebaseio.com/' + jsonName,
            newTodoList
          )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  registDone = (newTodoList) => {
    this.registDB(newTodoList, 'doneList.json');
  };

  registTodo = (newTodoList) => {
    this.registDB(newTodoList, 'todoList.json');
  };

  addToDoHandler = () => {
    console.log('add todo handler');
    if (this.state.title !== '') {
      let newToDo = [];
      if (this.state.todoList) {
        newToDo = [...this.state.todoList];
      }
      newToDo.push({
        title: this.state.title,
        memo: this.state.memo,
        date: new Date().toUTCString(),
        status: consts.CARD_STATUS_CREATED,
      });
      console.log(newToDo);

      this.registTodo(newToDo);

      this.setState({ todoList: newToDo, memo: '', title: '' });
    }
  };

  inputChangeHandler = (inputText, inputType) => {
    this.setState({ [inputType]: inputText });
  };

  cardChangeHandler = (index, mode) => {
    console.log('clicked!', index);

    // create new todo list
    let newTodoList = [...this.state.todoList];
    console.log('before', newTodoList);

    // create new todo
    newTodoList[index].status = mode;

    this.registTodo(newTodoList);
    this.setState({ todoList: newTodoList });
  };

  cardMoveHandler = (index) => {
    console.log('clicked!', index);

    // create new todo list
    let newTodoList = [...this.state.todoList];
    console.log('before', newTodoList);

    // add to list
    const mode = newTodoList.state;
    if (mode === consts.CARD_STATUS_SUCCESS) {
    }

    // fix me
    this.registDone(newTodoList[index]);

    // delete from list
    newTodoList.splice(index, 1);

    this.registTodo(newTodoList);
    this.setState({ todoList: newTodoList });
  };

  render() {
    return (
      <main className={classes.EditToDo}>
        <CardAddController
          title={this.state.title}
          memo={this.state.memo}
          onTitleInput={(e) => this.inputChangeHandler(e.target.value, 'title')}
          onMemoInput={(e) => this.inputChangeHandler(e.target.value, 'memo')}
          onAdd={this.addToDoHandler}
        />
        <Cards
          cardList={this.state.todoList}
          onChange={this.cardChangeHandler}
          onMove={this.cardMoveHandler}
        />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInitTodo: () => dispatch(actions.initTodo()),
  };
};

export default connect(null, mapDispatchToProps)(EditToDo);
