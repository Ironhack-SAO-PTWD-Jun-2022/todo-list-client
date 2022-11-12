import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { UserForm } from "../../components/Forms";
import authApi from '../../api/auth.api';

const SignupPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async ({ username, password }) => {
    setLoading(true)
    try {
      await authApi.signup({username, password});
      navigate('/');
    } catch (error) {
      // @TODO: mensagem de erro
      console.log('ERRO:', error);
    } finally {
      setLoading(false);
    }

  }

  return (
    <div className="signup-container">
      <h2 className='title'>Signup</h2>
      <UserForm onSubmit={onSubmit} submitText='Cadastrar' loading={loading} />
    </div>
  )
}

export default SignupPage