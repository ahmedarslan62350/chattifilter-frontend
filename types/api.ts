// Auth Types
export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface VerifyRequest {
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

// User Profile Types
export interface UpdateMeRequest {
  name?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data: T;
  message?: string;
}
