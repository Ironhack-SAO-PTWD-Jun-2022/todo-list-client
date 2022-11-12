import { Routes, Route } from 'react-router-dom';

import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';

import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='page-container'>
        <Routes>
          <Route path='/' element={<IsAnon><LoginPage /></IsAnon>} />
          <Route path='/signup' element={<IsAnon><SignupPage /></IsAnon>} />

          <Route path='*' element={<div>Not found</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;