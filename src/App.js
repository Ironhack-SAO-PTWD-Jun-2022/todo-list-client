import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div>Todo list!</div>} />
      </Routes>
    </div>
  );
};

export default App;