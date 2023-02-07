import { InputEnum } from 'common/enums';

export type InputProps = {
    placeholder: string;
    value: string;
    setValue: (value: string) => void;
    type: InputEnum;
}


export type SearchInputProps = {
    placeholder: string;
    value: string;
    setValue: (value: string) => void;
    callback: () => void;
    type: InputEnum;
}