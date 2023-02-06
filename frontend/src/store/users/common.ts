const enum ActionType {
    GET_ALL = '/users/all',
    GET = '/user',
    UPDATE = '/update-user',
    DELETE = '/delete-user',
};

const enum PathType {
    GET_ALL = '/',
    GET = '/:id',
    UPDATE = '/:id',
    DELETE = '/:id',
};

export { ActionType, PathType };