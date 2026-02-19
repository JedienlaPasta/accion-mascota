'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { funcionarioActual, Usuario, usuarioActual } from './mock-data';

interface AuthContextType {
  usuario: Usuario | null;
  isLoggedIn: boolean;
  login: (rol: 'ciudadano' | 'funcionario') => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const login = (rol: 'ciudadano' | 'funcionario') => {
    if (rol === 'ciudadano') {
      setUsuario(usuarioActual);
    } else {
      setUsuario(funcionarioActual);
    }
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        isLoggedIn: usuario !== null,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}
