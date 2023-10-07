import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className='container-fluid'>
        <Header />
        <Routes>
          <Route path='/' Component={}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
