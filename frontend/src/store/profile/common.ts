const enum ActionType {
    GET_MEALS = '/meals',
    ADD_MEAL = '/meals',
    DELETE_MEAL = '/meals/:externalMealId',
    GET_INGREDIENTS = '/ingredients',
    ADD_INGREDIENT = '/ingredients',
    DELETE_INGREDIENT = '/ingredients/:externalIngredientId',
};

export { ActionType };