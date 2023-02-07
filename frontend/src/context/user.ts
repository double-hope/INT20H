import { createContext } from 'react';

type UserContextType = { user: {firstName: string, lastName: string}, setUser: (user: {firstName: string, lastName: string}) => void };

export const UserContext = createContext<UserContextType>( {user: {firstName: null, lastName: null}, setUser: (user: {firstName: string, lastName: string}) => {}});

