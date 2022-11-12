import axios from 'axios';
import { isEmpty } from '../utils/validation.utils';
import { handleResponseError } from '../utils/errors.utils';
import { getToken, storeToken } from '../utils/token.utils';

class AuthApi {
  constructor() {
    // configuração do axios para usar sempre como base ou o q está no arquivo `.env`
    // ou, caso não exista, o localhost:5000.
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    })
  }
  
  // método de cadastro/signup
  signup = async ({username, password}) => {
    try {
      const hasEmptyFields = isEmpty(username, password);
      if (hasEmptyFields) {
        throw new Error('Campos obrigatórios.')
      }
      await this.api.post('/auth/signup', {username, password});
    } catch (error) {
      handleResponseError(error);
    }
  };
  
  // método de login
  login = async ({ username, password }) => {
    try {
      const hasEmptyFields = isEmpty(username, password);
      if (hasEmptyFields) {
        throw new Error('Campos obrigatórios.')
      }
      const { data } = await this.api.post('/auth/login', {username, password});
      storeToken(data.token);
    } catch (error) {
      handleResponseError(error);
    }
  }

  // método de verificação
  verify = async () => {
    // recupera o token que estiver armazenado no localStorage
    const token = getToken();
    try {
      // faz a requisição no backend colocando o token na autorização dos headers.
      // esperamos a resposta ser as informações de dentro do token.
      const { data } = this.api.get('/endpoint-de-verificação-que-vc-nomeou-no-backend', {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      return data;
    } catch (error) {
      handleResponseError(error);
    }
  }
}

const authApi = new AuthApi();
export default authApi;