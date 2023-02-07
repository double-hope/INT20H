import { combineComponents } from 'utils/combineComponents';
import { ThemeProvider, AuthProvider } from '..';
import { UserProvider } from 'providers/UserProvider';

const providers = [
    AuthProvider,
    ThemeProvider,
    UserProvider,
]

export const AppContextProvider = combineComponents(providers);