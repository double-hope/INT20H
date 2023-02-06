import { ApiPath, HttpMethodEnum } from 'common/enums';
import { Http } from 'services/http/httpService';

interface AuthProps {
    baseURL: string;
    http: Http;
}

class Auth {
    private _baseURL: string;
    private _http: Http;
    private _basePath: string;

    constructor({ baseURL, http }: AuthProps) {
        this._baseURL = baseURL;
        this._http = http;
        this._basePath = ApiPath.AUTH;
    }

    signUp(path, payload){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.POST,
            payload: JSON.stringify(payload),
            contentType: 'application/json',
        })
    }

    signIn(path, payload){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.POST,
            payload: JSON.stringify(payload),
            contentType: 'application/json',
        })
    }

    refreshToken(path, payload){
        return this._http.load(this._getUrl(path), {
            method: HttpMethodEnum.POST,
            payload: JSON.stringify(payload),
            contentType: 'application/json',
        })
    }

    _getUrl(path = '') {
        return `${this._baseURL}${this._basePath}${path}`;
    }

}

export { Auth };