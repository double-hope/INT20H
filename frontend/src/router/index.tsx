import { SignPage, Home, Recipes, FullRecipe } from 'pages';

export const privateRoutes = [
    {path: '/', element: <Home />},
    {path: '/recipes', element: <Recipes />},
    {path: `/recipes/:id`, element: <FullRecipe />},

]

export const publicRoutes = [
    {path: '/sign', element: <SignPage />}
]