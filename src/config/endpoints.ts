import axios from 'axios';
import type { AxiosInstance } from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Crear instancia de axios con configuración base
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Tipos
interface UserData {
  username: string;
  password: string;
}

// Obtener usuarios
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

// Crear nuevo usuario
export const postUsers = async (userData: UserData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error posting user:', error);
    throw error;
  }
};

// Login de usuario
export const loginUser = async (credentials: UserData) => {
  try {
    const response = await api.post('/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const saveGame = async (gameState: string) => {
  try {
    const response = await api.post('/save-choice', gameState);
    return response.data;
  } catch (error) {
    console.error('Error saving game:', error);
    throw error;
  }
};

export default api;
