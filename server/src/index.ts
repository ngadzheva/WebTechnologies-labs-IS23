// const http = require('http');

// const app = http.createServer((request, response) => {
//     console.log('Request received');

//     console.log(request.method);
//     console.log(request.headers);

//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end('Request processed successfully');
// });

// app.listen(3001);
// console.log('Server listens on port 3001');

// const express = require('express');
// const { studentsRouter } = require('./routes/students');
// const { usersRouter } = require('./routes/users');

import * as express from 'express';
import * as cors from 'cors';
import students from './routes/students';
import users from './routes/users';
import { DataBase } from './db';

const app = express();
const db = new DataBase();

app.use(cors());
app.use(express.json({ type: 'application/json' }));

app.use('/students', students);
app.use('/', users);

db.connectDB()
    .then(() => {
        console.log('DB listening on port 27017')
        app.listen(3001);
        console.log('Server listening on port 3001')
    })
    .catch(error => console.error('DB connection failed'));