import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Goal from './pages/Goal';
import Food from './pages/Food';
import Exercise from './pages/Exercise';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/goal' element={<Goal />}></Route>
          <Route path='/food' element={<Food />}></Route>
          <Route path='/exercise' element={<Exercise />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
