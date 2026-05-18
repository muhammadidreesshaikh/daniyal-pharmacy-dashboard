import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { authApi } from '../services/api/authApi';
import type { AuthState, AuthUser, LoginPayload, RegisterPayload } from '../types/auth';

type AuthContextValue = AuthState & {
  login: (payload: LoginPayload) => Promise<void>;
  register: (payload: RegisterPayload) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (payload: { token: string; password: string }) => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);
const TOKEN_KEY = 'pharmacy-jwt-token';
const USER_KEY = 'pharmacy-user-profile';

const readStoredUser = (): AuthUser | null => {
  const serialized = localStorage.getItem(USER_KEY);
  return serialized ? (JSON.parse(serialized) as AuthUser) : null;
};

const readStoredToken = (): string | null => localStorage.getItem(TOKEN_KEY);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(readStoredUser);
  const [token, setToken] = useState<string | null>(readStoredToken);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_KEY);
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    } else {
      localStorage.removeItem(TOKEN_KEY);
    }
  }, [token]);

  const persistSession = (nextToken: string, nextUser: AuthUser, rememberMe: boolean) => {
    setToken(nextToken);
    setUser(nextUser);
    if (rememberMe) {
      localStorage.setItem(TOKEN_KEY, nextToken);
      localStorage.setItem(USER_KEY, JSON.stringify(nextUser));
    }
  };

  const login = async (payload: LoginPayload) => {
    setIsLoading(true);
    try {
      const response = await authApi.login(payload);
      persistSession(response.token, response.user, payload.rememberMe);
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (payload: RegisterPayload) => {
    setIsLoading(true);
    try {
      const response = await authApi.register(payload);
      persistSession(response.token, response.user, true);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  };

  const forgotPassword = async (email: string) => {
    setIsLoading(true);
    try {
      await authApi.forgotPassword(email);
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (payload: { token: string; password: string }) => {
    setIsLoading(true);
    try {
      await authApi.resetPassword(payload);
    } finally {
      setIsLoading(false);
    }
  };

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      token,
      isAuthenticated: Boolean(token && user),
      isLoading,
      login,
      register,
      logout,
      forgotPassword,
      resetPassword,
    }),
    [user, token, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}