const enum ActionType {
    GET_MEALS = '/profile/meals',
    ADD_MEAL = '/profile/add-meal',
    DELETE_MEAL = '/profile/delete-meal',
    GET_INGREDIENTS = '/profile/ingredients',
    ADD_INGREDIENT = '/profile/add-ingredient',
    DELETE_INGREDIENT = '/profile/delete-ingredient',
};

const enum PathType {
    GET_MEALS = '/meals',
    ADD_MEAL = '/meals',
    DELETE_MEAL = '/meals/:externalMealId',
    GET_INGREDIENTS = '/ingredients',
    ADD_INGREDIENT = '/ingredients',
    DELETE_INGREDIENT = '/ingredients/:externalIngredientId',
};

export { ActionType, PathType };