import { SignPage, Home, Recipes } from 'pages';

export const privateRoutes = [
    {path: '/', element: <Home />},
    {path: '/recipes', element: <Recipes />}
]

export const publicRoutes = [
    {path: '/sign', element: <SignPage />}
]