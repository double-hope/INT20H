import { SignPage, CategoryRecipes, FullRecipe, Products, Recipes, Profile } from 'pages';

export const privateRoutes = [
    {path: `/`, element: <Profile />},
    {path: '/recipes', element: <Recipes />},
    {path: '/recipes/category', element: <CategoryRecipes />},
    {path: `/recipes/category/:id`, element: <FullRecipe />},
    {path: `/products`, element: <Products />},

]

export const publicRoutes = [
    {path: '/sign', element: <SignPage />}
]