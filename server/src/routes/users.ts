// const express = require('express');
import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (request, response) => {
    const params = request.query;
    console.log(params);

    response.status(200).json('Users list');
});

// module.exports = { usersRouter };

export default usersRouter;