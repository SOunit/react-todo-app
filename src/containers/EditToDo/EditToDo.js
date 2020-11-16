import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import classes from './EditToDo.module.css';
import axios from 'axios';
import * as consts from '../../const/const';
import CardAddController from '../../components/CardAddController/CardAddController';

class EditToDo extends Component {
  state = {
    todoList: [],
    title: '',
    memo: '',
  };

  getTodoList = () => {
    axios
      .get('https://react-todo-app-57b96.firebaseio.com/todoList.json')
      .then((res) => {
        console.log(res.data);
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
        console.log(res);
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
    let todoList = null;
    if (this.state.todoList && this.state.todoList.length > 0) {
      todoList = [...this.state.todoList];
      todoList = todoList.map((el, index) => {
        return (
          <Card
            title={el.title}
            memo={el.memo}
            date={el.date}
            status={el.status}
            onDelete={() =>
              this.cardChangeHandler(index, consts.CARD_STATUS_DELETE)
            }
            onSuccess={() =>
              this.cardChangeHandler(index, consts.CARD_STATUS_SUCCESS)
            }
            onBack={() =>
              this.cardChangeHandler(index, consts.CARD_STATUS_CREATED)
            }
            onMove={() => this.cardMoveHandler(index)}
            key={index}
          />
        );
      });
    }
    return (
      <main className={classes.EditToDo}>
        <CardAddController
          title={this.state.title}
          memo={this.state.memo}
          onTitleInput={(e) => this.inputChangeHandler(e.target.value, 'title')}
          onMemoInput={(e) => this.inputChangeHandler(e.target.value, 'memo')}
          onAdd={this.addToDoHandler}
        />
        {todoList}
      </main>
    );
  }
}

export default EditToDo;
