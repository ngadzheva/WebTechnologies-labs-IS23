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
import students from './routes/students';
import users from './routes/users';

const app = express();

app.use(express.json({ type: 'application/json' }));

app.use('/students', students);
app.use('/users', users);

app.listen(3001);