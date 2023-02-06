import { DataLoadStatusEnum } from 'common/enums';

const callApi = (store) => (next) => (action) => {
    const { callApi, type, ...rest } = action;

    if(!callApi)
        return next(action);

    next({
        type: `${type}${DataLoadStatusEnum.START}`,
        ...rest,
    });

    fetch(callApi)
        .then((res) => res.json())
        .then((data) => {

            next({
                ...rest,
                type: `${type}${DataLoadStatusEnum.SUCCESS}`,
                payload: {
                    response: data,
                },
            });
        })
        .catch((err) => {
            next({
                ...rest,
                type: `${type}${DataLoadStatusEnum.FAIL}`,
                payload:{
                    error: err,
                },
            });
        });
};

export { callApi };