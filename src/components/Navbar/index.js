import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import './styles.css';
import { Button } from '../Buttons';

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className='navbar'>
      <h2 className='brand'>Lista de Tarefas 78</h2>
      <div className='btn-container'>
        {isLoggedIn ? (
          <button className='btn'>Logout</button>
        ) : (
          <>
            <Button onClick={() => console.log('signup')}>Signup</Button>
            <Button color='secondary' onClick={() => console.log('login')}>Login</Button>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar