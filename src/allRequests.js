import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/v1';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE2ODA4NTM2NjB9.CzYbEjQVaKIvP3-A1jcVBevOvzstoz9VkJIpAehUROE';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
