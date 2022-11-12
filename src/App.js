import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<div>Todo list!</div>} />
      </Routes>
    </div>
  );
};

export default App;