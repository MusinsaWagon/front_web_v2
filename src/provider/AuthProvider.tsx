import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

interface AuthContextType {
  isAuthenticated: boolean;
  startLogin: (token: string) => void;
  startLogout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);

  useEffect(() => {
    const token = cookies.accessToken;
    setIsAuthenticated(!!token);
  }, []);

  const startLogin = (token: string) => {
    setCookie('accessToken', token, {
      path: '/',

      maxAge: 60 * 60 * 24, // 24시간
      secure: false, // https에만 적용하려면 true
      sameSite: 'strict', // CSRF 방지
    });

    setIsAuthenticated(true);
  };

  const startLogout = () => {
    removeCookie('accessToken', { path: '/' });

    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, startLogin, startLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('전역변수 오류발생');
  }
  return context;
};
