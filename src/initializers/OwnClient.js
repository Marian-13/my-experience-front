import OwnClient from '../api/OwnClient';

if (process.env.NODE_ENV === 'development') OwnClient.defaults.baseURL = 'http://localhost:3000';
