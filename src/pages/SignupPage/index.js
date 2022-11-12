import './styles.css';
import { UserForm } from "../../components/Forms";

const SignupPage = () => {
  const onSubmit = ({ username, password }) => {
    console.log('Signup:', username, password);
  }

  return (
    <div className="signup-container">
      <h2 className='title'>Signup</h2>
      <UserForm onSubmit={onSubmit} submitText='Cadastrar' />
    </div>
  )
}

export default SignupPage