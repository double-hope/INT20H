import { SignPage, FullRecipe, Ingredients, Meals, Profile, CategoryIngredients, MyMeals, MyIngredients, Groceries } from 'pages';

export const privateRoutes = [
    {path: '/', element: <Profile />},
    {path: '/meals', element: <Meals />},
    {path: '/my-meals', element: <MyMeals />},
    {path: '/my-meals/:id', element: <FullRecipe />},
    {path: `/meals/:id`, element: <FullRecipe />},
    {path: `/ingredients`, element: <Ingredients />},
    {path: `/my-ingredients`, element: <MyIngredients />},
    {path: `/ingredients/:category`, element: <CategoryIngredients />},
    {path: `/groceries`, element: <Groceries />},
]

export const publicRoutes = [
    {path: '/sign', element: <SignPage />}
]