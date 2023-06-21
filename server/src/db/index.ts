import mongoose from 'mongoose';

const DB_TYPE = 'mongodb';
const DB_HOST = '127.0.0.1';
const DB_PORT = '27017';
const DB_NAME = 'web-tech';

export class DataBase {
    constructor () {}

    async connectDB() {
        return mongoose.connect(`${DB_TYPE}://${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    }
}