import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: { username: string; role: string } | null;
  isLoading: boolean;
}

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: { username: string; role: string } }
  | { type: 'LOGIN_FAILURE' }
  | { type: 'LOGOUT' }
  | { type: 'INITIALIZE' };

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: true,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true };
    
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        isLoading: false,
      };
    
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false,
      };
    
    case 'LOGOUT':
      localStorage.removeItem('auth_token');
      localStorage.removeItem('auth_user');
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false,
      };
    
    case 'INITIALIZE':
      const token = localStorage.getItem('auth_token');
      const savedUser = localStorage.getItem('auth_user');
      
      console.log('AuthReducer - INITIALIZE - Token:', token);
      console.log('AuthReducer - INITIALIZE - SavedUser:', savedUser);
      
      if (token && savedUser) {
        console.log('AuthReducer - User authenticated from storage');
        return {
          ...state,
          isAuthenticated: true,
          user: JSON.parse(savedUser),
          isLoading: false,
        };
      }
      
      console.log('AuthReducer - No valid auth found, setting isLoading false');
      return { ...state, isLoading: false };
    
    default:
      return state;
  }
}

const AuthContext = createContext<{
  state: AuthState;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
} | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Initialize auth state on mount
  useEffect(() => {
    console.log('AuthContext - Initializing...');
    const token = localStorage.getItem('auth_token');
    const savedUser = localStorage.getItem('auth_user');
    console.log('AuthContext - Token:', token);
    console.log('AuthContext - Saved User:', savedUser);
    dispatch({ type: 'INITIALIZE' });
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    dispatch({ type: 'LOGIN_START' });

    // Simulate API call with simple credential check
    // In production, this would be a real API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple credential validation (replace with real authentication)
    if (username === 'admin' && password === 'admin123') {
      const user = { username: 'admin', role: 'administrator' };
      
      localStorage.setItem('auth_token', 'demo_token_' + Date.now());
      localStorage.setItem('auth_user', JSON.stringify(user));
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
      return true;
    } else {
      dispatch({ type: 'LOGIN_FAILURE' });
      return false;
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};