const enum DataStatusEnum {
    IDLE = 'idle',
    PENDING = 'pending',
    SUCCESS = 'success',
    ERROR = 'error',
};

const enum DataLoadStatusEnum {
    START = '--start',
    SUCCESS = '--success',
    FAIL = '--fail',
};

export { DataStatusEnum, DataLoadStatusEnum };