import { Auth } from './auth';
import { Http } from './http';
import { Ingredients } from './ingredients';
import { Meals } from './meals';
import { Profile } from './profile';
import { Users } from './users';

const http = new Http();

const auth = new Auth({
    baseURL: 'http://localhost:8080',
    http
});

const users = new Users({
    baseURL: 'http://localhost:8080',
    http
});

const ingredients = new Ingredients({
    baseURL: 'http://localhost:8080',
    http
});

const meals = new Meals({
    baseURL: 'http://localhost:8080',
    http
});

const profile = new Profile({
    baseURL: 'http://localhost:8080',
    http
});


export { http, auth, users, ingredients, meals, profile };