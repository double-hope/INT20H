const enum ActionType {
    GET_BY_ID = '/meals/id',
    GET_BY_LETTER = '/meals/letter',
    GET_AVAILABLE_BY_LETTER = '/meals/letter/available',
};

const enum PathType {
    GET_BY_ID = '/id/:mealExternalId',
    GET_BY_LETTER = '/letter/:firstLetter',
    GET_AVAILABLE_BY_LETTER = '/letter/:firstLetter/available',
};

export { ActionType, PathType };