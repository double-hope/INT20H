import { SignPage, FullRecipe, Ingredients, Meals, Profile, CategoryIngredients, MyMeals, MyIngredients } from 'pages';

export const privateRoutes = [
    {path: `/`, element: <Profile />},
    {path: '/meals', element: <Meals />},
    {path: '/my-meals', element: <MyMeals />},
    {path: `/meals/:id`, element: <FullRecipe />},
    {path: `/ingredients`, element: <Ingredients />},
    {path: `/my-ingredients`, element: <MyIngredients />},
    {path: `/ingredients/:category`, element: <CategoryIngredients />},
]

export const publicRoutes = [
    {path: '/sign', element: <SignPage />}
]