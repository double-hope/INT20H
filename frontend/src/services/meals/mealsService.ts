import { RequestDTO } from 'common/dto';
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

    getMealByExternalId(params: RequestDTO) {
        const query = `${params.path}${Object.keys(params.params).map((key) => params.params[key as keyof typeof params.params] + '/')}`
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }

    getMealByFirstLetter(params: RequestDTO) {
        const query = `${params.path}${Object.keys(params.params).map((key) => params.params[key as keyof typeof params.params] + '/')}`
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }

    getAvailableMealsByFirstLetter(params: RequestDTO) {
        const query = `${params.path}${Object.keys(params.params).map((key) => params.params[key as keyof typeof params.params] + '/')}available`
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }

    _getUrl(path = '') {
        return `${this._baseURL}${this._basePath}${path}`;
    }
}

export { Meals };