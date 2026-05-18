export type Role = 'SUPER_ADMIN' | 'EMPLOYEE';

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
};

export type LoginPayload = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type RegisterPayload = {
  name: string;
  email: string;
  password: string;
  role: Role;
};

export type AuthState = {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

export type AuthResponse = {
  token: string;
  user: AuthUser;
};