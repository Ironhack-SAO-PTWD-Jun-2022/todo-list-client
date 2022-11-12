import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='page-container'>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />

          <Route path='*' element={<div>Not found</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;