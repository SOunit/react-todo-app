import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import EditToDo from './containers/EditToDo/EditToDo';
import Done from './containers/Done/Done';
import { Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header title="regist" />
      <Switch>
        <Route path="/delete" component={Done} />
        <Route path="/done" component={Done} />
        <Route path="/" exact component={EditToDo} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
