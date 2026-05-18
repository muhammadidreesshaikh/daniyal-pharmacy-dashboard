import { apiClient } from './client';
import './mockServer';
import type { AuthResponse, LoginPayload, RegisterPayload } from '../../types/auth';

export const authApi = {
  async login(payload: LoginPayload) {
    const { data } = await apiClient.post<AuthResponse>('/auth/login', payload);
    return data;
  },
  async register(payload: RegisterPayload) {
    const { data } = await apiClient.post<AuthResponse>('/auth/register', payload);
    return data;
  },
  async forgotPassword(email: string) {
    const { data } = await apiClient.post('/auth/forgot-password', { email });
    return data as { message: string };
  },
  async resetPassword(payload: { token: string; password: string }) {
    const { data } = await apiClient.post('/auth/reset-password', payload);
    return data as { message: string };
  },
  async me() {
    const { data } = await apiClient.get('/auth/me');
    return data;
  },
};