import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import classes from './EditToDo.module.css';

class EditToDo extends Component {
  state = {
    todoList: [
      { title: 'test1', memo: 'test2' },
      { title: 'test3', memo: 'test4' },
    ],
    title: '',
    memo: '',
  };

  addToDoHandler = () => {
    console.log('add todo handler');
    if (this.state.title !== '') {
      let newToDo = [...this.state.todoList];
      newToDo.push({ title: this.state.title, memo: this.state.memo });
      console.log(newToDo);
      this.setState({ todoList: newToDo });
    }
  };

  inputChangeHandler = (inputText, inputType) => {
    this.setState({ [inputType]: inputText });
  };

  clickHandler = (index) => {
    console.log('clicked!', index);
    let newTodoList = [...this.state.todoList];
    console.log('before', newTodoList);
    newTodoList.splice(index, 1);
    console.log(newTodoList);
    this.setState({ todoList: newTodoList });
  };

  render() {
    let todoList = null;
    if (this.state.todoList.length > 0) {
      todoList = [...this.state.todoList];
      todoList = todoList.map((el, index) => {
        return (
          <Card
            title={el.title}
            memo={el.memo}
            clicked={() => this.clickHandler(index)}
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
