import { RequestDTO } from 'common/dto';
import { ApiPath, HttpMethodEnum } from 'common/enums';
import { Http } from 'services/http/httpService';

interface IngredientsProps {
    baseURL: string;
    http: Http;
}

class Ingredients {
    private _baseURL: string;
    private _http: Http;
    private _basePath: string;

    constructor({ baseURL, http }: IngredientsProps) {
        this._baseURL = baseURL;
        this._http = http;
        this._basePath = ApiPath.INGREDIENTS;
    }

    getAllIngredients(path) {
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }

    getIngredientByName(params: RequestDTO) {
        const query = `${params.path}${Object.keys(params.params).map((key) => params.params[key as keyof typeof params.params] + '/')}`
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }

    getIngredientsByType(params: RequestDTO) {
        const query = `${params.path}${Object.keys(params.params).map((key) => params.params[key as keyof typeof params.params] + '/')}`
        return this._http.load(this._getUrl(query), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }

    getAllIngredientsTypes(path) {    
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.GET,
            contentType: 'application/json'
        });
    }

    _getUrl(path = '') {
        return `${this._baseURL}${this._basePath}${path}`;
    }
}

export { Ingredients };