import { useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import { Navigate } from 'react-router-dom';
import Loading from './Loading';

const IsAnon = ({ children }) => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  // caso a autenticação no context ainda esteja sendo executada
  // retorna o componente Loading, encerrando a função.
  if (isLoading) {
    return <Loading />
  }

  // depois de verificado, caso o usuário esteja logado
  // retorna um redirecionamento para a página inicial, encerrando a função
  if (isLoggedIn) {
    return <Navigate to='/' />
  }

  // caso não tenha entrado em nenhum if anterior
  // retorna os "elementos filhos" do componente
  return children;
};

export default IsAnon;
