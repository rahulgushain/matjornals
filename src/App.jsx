import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className='overflow-hidden' >
    <div className='h-[70px]'>
    <NavBar />

    </div>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
