import { Auth } from './auth';
import { Http } from './http';
import { Ingredients } from './ingredients';
import { Meals } from './meals';
import { Profile } from './profile';
import { Users } from './users';

const http = new Http();
// const baseURL = 'http://hackathonint20h2023testtask-env.eba-qw8q6ixf.eu-north-1.elasticbeanstalk.com';
const baseURL = 'http://localhost:8080';

const auth = new Auth({
    baseURL,
    http
});

const users = new Users({
    baseURL,
    http
});

const ingredients = new Ingredients({
    baseURL,
    http
});

const meals = new Meals({
    baseURL,
    http
});

const profile = new Profile({
    baseURL,
    http
});


export { http, auth, users, ingredients, meals, profile };