import { RequestDTO } from 'common/dto';
import { ApiPath, HttpMethodEnum } from 'common/enums';
import { Http } from 'services/http/httpService';

interface UsersProps {
    baseURL: string;
    http: Http;
}

class Users {
    private _baseURL: string;
    private _http: Http;
    private _basePath: string;

    constructor({ baseURL, http }: UsersProps) {
        this._baseURL = baseURL;
        this._http = http;
        this._basePath = ApiPath.USERS;
    }

    getAllUsers(path) {
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }


    getUserById(params: RequestDTO) {
        const query = `${params.path}${Object.keys(params.params).map((key) => params.params[key as keyof typeof params.params] + '/')}`
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }

    updateUser(params, payload) {
        const query = !!params.sort ? '?' + this._getQueryString(params) : '';
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.PUT,
            payload,
            contentType: 'application/json'
        })
    }

    deleteUser(params: RequestDTO) {
        const query = `${params.path}${Object.keys(params.params).map((key) => params.params[key as keyof typeof params.params] + '/')}`
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.DELETE,
            contentType: 'application/json'
        })
    }

    _getUrl(path = '') {
        return `${this._baseURL}${this._basePath}${path}`;
    }

    _getQueryString(obj) {
        const keyValuePairs = [];
        for (const key in obj) {
            keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
        }
        return keyValuePairs.join('&');
    }
}

export { Users };