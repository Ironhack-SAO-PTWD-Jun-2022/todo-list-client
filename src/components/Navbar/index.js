import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import './styles.css';
import { NavButton } from '../Buttons';

const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <nav className='navbar'>
      <h1 className='brand'>Lista de Tarefas 78</h1>
      <div className='btn-container'>
        {isLoggedIn ? (
          <NavButton onClick={() => console.log('logout')}>Logout</NavButton>
        ) : (
          <>
            <NavButton url='/signup'>Signup</NavButton>
            <NavButton url='/'>Login</NavButton>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar