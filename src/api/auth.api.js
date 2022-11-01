import axios from 'axios';

class AuthApi {
  constructor() {
    // configuração do axios para usar sempre como base ou o q está no arquivo `.env`
    // ou, caso não exista, o localhost:5000.
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    })
  }
  
  // método de cadastro/signup
  
  // método de login
  
  // método de verificação
  verify = async () => {
    // recupera o token que estiver armazenado no localStorage
    const token = localStorage.getItem('authToken');
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
      // trate o erro de acordo com o q foi devolvido do backend
    }
  }
}

const authApi = new AuthApi();
export default authApi;