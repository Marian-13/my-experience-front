import OwnClient from '../api/OwnClient';

const baseURL = (process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : '';

OwnClient.defaults.baseURL = `${baseURL}/api`;
