const API_BASE = 'http://localhost:5000/api';

/**
 * Register a new user
 */
export const registerUser = async (name: string, email: string, password: string) => {
  const res = await fetch(`${API_BASE}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Registration failed');
  return data; // { token, user }
};

/**
 * Login an existing user
 */
export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Login failed');
  return data; // { token, user }
};

/**
 * Save token + user to localStorage
 */
export const saveSession = (token: string, user: object) => {
  localStorage.setItem('shaadibio_token', token);
  localStorage.setItem('shaadibio_user', JSON.stringify(user));
};

/**
 * Get token from localStorage
 */
export const getToken = () => localStorage.getItem('shaadibio_token');

/**
 * Clear session (logout)
 */
export const clearSession = () => {
  localStorage.removeItem('shaadibio_token');
  localStorage.removeItem('shaadibio_user');
};
