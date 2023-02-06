import { combineComponents } from 'utils/combineComponents';
import { ThemeProvider, AuthProvider } from '..';

const providers = [
    AuthProvider,
    ThemeProvider,
]

export const AppContextProvider = combineComponents(providers);