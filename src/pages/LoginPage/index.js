import './styles.css';
import { UserForm } from "../../components/Forms";

const LoginPage = () => {
  const onSubmit = ({ username, password }) => {
    console.log('Login:', username, password);
  }

  return (
    <div className="login-container">
      <h2 className='title'>Login</h2>
      <UserForm onSubmit={onSubmit} submitText='Entrar' />
    </div>
  )
}

export default LoginPage