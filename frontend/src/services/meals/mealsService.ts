import { ApiPath, HttpMethodEnum } from 'common/enums';
import { Http } from 'services/http/httpService';

interface MealsProps {
    baseURL: string;
    http: Http;
}

class Meals {
    private _baseURL: string;
    private _http: Http;
    private _basePath: string;

    constructor({ baseURL, http }: MealsProps) {
        this._baseURL = baseURL;
        this._http = http;
        this._basePath = ApiPath.MEALS;
    }

    getMealByExternalId(params) {
        const query = !!params.sort ? '?' + this._getQueryString(params) : '';
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }


    getMealByFirstLetter(params) {
        const query = !!params.sort ? '?' + this._getQueryString(params) : '';
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }

    getAvailableMealsByFirstLetter(params) {
        const query = !!params.sort ? '?' + this._getQueryString(params) : '';
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
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

export { Meals };