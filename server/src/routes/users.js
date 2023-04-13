const express = require('express');

const usersRouter = express.Router();

usersRouter.get('/', (request, response) => {
    const params = request.query;
    console.log(params);

    response.status(200).json('Users list');
});

module.exports = { usersRouter };