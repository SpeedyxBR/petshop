import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Mock user data for demonstration
const mockUsers = [
  { id: 1, name: 'Jane Doe', email: 'jane@example.com', password: 'password123' }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call with a delay
    return new Promise(resolve => {
      setTimeout(() => {
        const foundUser = mockUsers.find(
          u => u.email === email && u.password === password
        );
        
        if (foundUser) {
          const { password, ...userWithoutPassword } = foundUser;
          setUser(userWithoutPassword as User);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 500);
    });
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call with a delay
    return new Promise(resolve => {
      setTimeout(() => {
        const userExists = mockUsers.some(u => u.email === email);
        
        if (userExists) {
          resolve(false);
        } else {
          const newUser = {
            id: mockUsers.length + 1,
            name,
            email,
            password
          };
          
          mockUsers.push(newUser);
          const { password: _, ...userWithoutPassword } = newUser;
          setUser(userWithoutPassword as User);
          resolve(true);
        }
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      register,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};