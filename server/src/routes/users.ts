// const express = require('express');
import { Request, Response, Router } from 'express';
import { UsersController } from '../controllers/users-controller';
import { IUser } from '../interfaces/users';

const usersRouter = Router();
let usersController: UsersController;

const getUsersController = async (request: Request, response: Response, next: () => void) => {
    try {
        usersController = new UsersController();
        await usersController.init();

        next();
    } catch(error) {
        console.error(error);
        response.status(500).json({ error: 'Internal server error' });
    }
};

const validateUser = (request, response, next) => {
    const userData = request.body;

    const isUserDataValid = usersController.validateUserData(userData);

    if (isUserDataValid.valid) {
        next();
    } else {
        response.status(400).json(isUserDataValid.message);
    }
}

usersRouter.use(getUsersController);

// usersRouter.get('/', (request, response) => {
//     const params = request.query;
//     console.log(params);

//     response.status(200).json('Users list');
// });

usersRouter.post('/register', validateUser, async (request, response) => {
    const { username, password, email } = request.body;
    const userData = {username, password, email};
    try {
        const user = await usersController.createUser(userData);

        if (user.success) {
            response.status(201).json(user.message);
        } else {
            response.status(400).json(user.message);
        }
    } catch (error) {
        response.status(500).json('Internal server error');
    }
});

usersRouter.post('/login', (request, response) => {
    
})

// module.exports = { usersRouter };

export default usersRouter;