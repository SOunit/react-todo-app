import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import classes from './EditToDo.module.css';
import axios from 'axios';

class EditToDo extends Component {
  state = {
    todoList: [],
    title: '',
    memo: '',
  };

  componentDidMount = () => {
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

  registTodoToDB = (newTodoList) => {
    axios
      .delete('https://react-todo-app-57b96.firebaseio.com/todoList.json')
      .then((res) => {
        console.log(res);
        axios
          .post(
            'https://react-todo-app-57b96.firebaseio.com/todoList.json',
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
      });
      console.log(newToDo);

      this.registTodoToDB(newToDo);

      this.setState({ todoList: newToDo, memo: '', title: '' });
    }
  };

  inputChangeHandler = (inputText, inputType) => {
    this.setState({ [inputType]: inputText });
  };

  cardClickHandler = (index) => {
    console.log('clicked!', index);
    let newTodoList = [...this.state.todoList];
    console.log('before', newTodoList);
    newTodoList.splice(index, 1);
    console.log(newTodoList);
    this.registTodoToDB(newTodoList);
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
            clicked={() => this.cardClickHandler(index)}
            key={index}
          />
        );
      });
    }
    return (
      <main className={classes.EditToDo}>
        <div>
          <label for="title" className={classes.Label}>
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onInput={(e) => this.inputChangeHandler(e.target.value, 'title')}
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
            value={this.state.memo}
            onInput={(e) => this.inputChangeHandler(e.target.value, 'memo')}
            className={classes.Input}
          ></input>
        </div>
        <input
          type="button"
          value="Add"
          onClick={this.addToDoHandler}
          className={classes.Button}
        />
        {todoList}
      </main>
    );
  }
}

export default EditToDo;
