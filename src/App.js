import './App.css';
import Header from './components/Header/Header';
import EditToDo from './containers/EditToDo/EditToDo';

function App() {
  return (
    <div className="App">
      <Header title="Regist" />
      <EditToDo />
    </div>
  );
}

export default App;
