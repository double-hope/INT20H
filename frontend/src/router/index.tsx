import { SignPage, Home } from 'pages';

export const privateRoutes = [
    {path: '/', element: <Home />}
]

export const publicRoutes = [
    {path: '/sign', element: <SignPage />}
]