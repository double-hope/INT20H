import { RequestDTO } from 'common/dto';
import { ApiPath, HttpMethodEnum } from 'common/enums';
import { Http } from 'services/http/httpService';

interface ProfileProps {
    baseURL: string;
    http: Http;
}

class Profile {
    private _baseURL: string;
    private _http: Http;
    private _basePath: string;

    constructor({ baseURL, http }: ProfileProps) {
        this._baseURL = baseURL;
        this._http = http;
        this._basePath = ApiPath.PROFILE;
    }

    getSavedMeals(path) {
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }

    addMealToProfile(path, payload) {
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.POST,
            payload: JSON.stringify(payload),
            contentType: 'application/json'
        });
    }

    deleteMealFromProfile(params: RequestDTO) {
        const query = `${params.path}${Object.keys(params.params).map((key) => params.params[key as keyof typeof params.params] + '/')}`
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.DELETE,
            contentType: 'application/json'
        });
    }

    getSavedIngredients(path) {
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }

    addIngredientToProfile(path, payload) {
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.POST,
            payload: JSON.stringify(payload),
            contentType: 'application/json'
        });
    }

    deleteIngredientFromProfile(params: RequestDTO) {  
        const query = `${params.path}${Object.keys(params.params).map((key) => params.params[key as keyof typeof params.params] + '/')}`
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.DELETE,
            contentType: 'application/json'
        });
    }

    _getUrl(path = '') {
        return `${this._baseURL}${this._basePath}${path}`;
    }
}

export { Profile };