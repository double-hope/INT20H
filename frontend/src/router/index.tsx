import { SignPage, CategoryRecipes, FullRecipe, Ingredients, Meals, Profile } from 'pages';

export const privateRoutes = [
    {path: `/`, element: <Profile />},
    {path: '/meals', element: <Meals />},
    {path: '/recipes/category', element: <CategoryRecipes />},
    {path: `/recipes/category/:id`, element: <FullRecipe />},
    {path: `/ingredients`, element: <Ingredients />},

]

export const publicRoutes = [
    {path: '/sign', element: <SignPage />}
]