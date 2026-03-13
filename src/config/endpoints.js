import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

// Crear instancia de axios con configuración base
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
export const postUsers = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    console.error('Error posting user:', error);
    throw error;
  }
};

export default api;
