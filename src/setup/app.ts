import "dotenv/config";

const NODE_ENV = process.env.NODE_ENV;
const SV_PORT = +(process.env.SV_PORT) || 3000;
const PREFIX_API = '/api/v1';
const SWAGGER_URI = '/documentation';

const DB_HOST = process.env.DB_HOST;
const DB_PORT = +(process.env.DB_PORT);
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;


export const appConfig = {
    NODE_ENV,
    SV_PORT,
    PREFIX_API,
    SWAGGER_URI,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME
}