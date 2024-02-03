import logo from './logo.svg';
import './App.css';
import WalmartData from './Components/Data';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import Counter from './Components/Counter'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<TaskList/>}></Route>
        <Route path='/taskForm' element={<TaskForm/>}></Route>
      </Routes>
    </Router>
    // < Counter / >
  );
}

export default App;
