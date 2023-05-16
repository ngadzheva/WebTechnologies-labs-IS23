import { MongoClient } from 'mongodb';

const DB_TYPE = 'mongodb';
const DB_HOST = '127.0.0.1';
const DB_PORT = '27017';
const DB_NAME = 'web-tech';

export class DataBase {
    private client;
    private db;

    constructor () {
        this.client = new MongoClient(`${DB_TYPE}://${DB_HOST}:${DB_PORT}`);
    }

    async connectDB() {
        try {
            await this.client.connect();

            this.db = await this.client.db(DB_NAME);

            return this.db;
        } catch (error) {
            this.client.close();
        }
    }
}