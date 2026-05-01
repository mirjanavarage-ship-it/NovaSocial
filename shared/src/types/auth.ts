export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  bio?: string;
  isAdmin: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface JwtPayload {
  userId: string;
  email: string;
  isAdmin: boolean;
  iat: number;
  exp: number;
}