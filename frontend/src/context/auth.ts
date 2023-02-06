import { createContext } from 'react';

type AuthContextType = boolean;

export const AuthContext = createContext<AuthContextType>(!!sessionStorage.getItem('token'));
