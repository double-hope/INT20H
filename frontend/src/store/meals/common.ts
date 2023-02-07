const enum ActionType {
    GET_BY_ID = '/meals/id',
    GET_BY_LETTER = '/meals/letter',
    GET_BY_NAME = '/meals/name',
    GET_AVAILABLE_BY_LETTER = '/meals/letter/available',
};

const enum PathType {
    GET_BY_ID = '/id/',
    GET_BY_LETTER = '/letter/',
    GET_BY_NAME = '/name/',
};

export { ActionType, PathType };