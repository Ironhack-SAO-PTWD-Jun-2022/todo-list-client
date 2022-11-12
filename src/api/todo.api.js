import axios from 'axios';
import { isEmpty } from '../utils/validation.utils';
import { handleResponseError } from '../utils/errors.utils';
import { getToken, storeToken } from '../utils/token.utils';

class TodoApi {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
    })

    this.api.interceptors.request.use((config) => {
      const token = getToken();

      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`
        }
      }

      return config;
    })
  }

  createTodo = async (description) => {
    try {
      if (isEmpty(description)) {
        throw new Error('Campo obrigatório.');
      }
      await this.api.post('/api', { description });
    } catch (error) {
      handleResponseError(error);
    }
  }

  getList = async () => {
    try {
      const { data } = await this.api.get('/api');
      return data;
    } catch (error) {
      handleResponseError(error);
    }
  }
}

const todoApi = new TodoApi();
export default todoApi;