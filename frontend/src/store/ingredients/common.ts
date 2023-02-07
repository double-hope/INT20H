const enum ActionType {
    GET_ALL=  '/ingredients',
    GET_BY_NAME = '/ingredients/name',
    GET_BY_TYPE = '/ingredients/type',
    GET_TYPES = '/types',
};

const enum PathType {
    GET_ALL=  '/',
    GET_BY_NAME = '/name/',
    GET_BY_TYPE = '/type/',
    GET_TYPES = '/types',
};

export { ActionType, PathType };