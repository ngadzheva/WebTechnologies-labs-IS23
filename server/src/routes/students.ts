// const express = require('express');
// const { read, write } = require('../utils/file-utils');

import { Router, Request, Response } from 'express';
import { read, write } from '../utils/file-utils';
import { IStudent, IStudentsData } from '../interfaces/students';
import { StudentsController } from '../controllers/students-controller';

const studentsRouter: Router = Router();
const studentsJSON: string = 'resources/students.json';

let studentsController: StudentsController;

const getStudentsController = async (request: Request, response: Response, next: () => void) => {
    try {
        studentsController = new StudentsController();
        next();
    } catch(error) {
        console.error(error);
        response.status(500).json({ error: 'Internal server error' });
    }
};

studentsRouter.use(getStudentsController);

studentsRouter.get('/', async (request: Request, response: Response) => {
    try {
        const students = await studentsController.getStudentsData();

        if (students.length > 0) {
            response.status(200).json(students);
        } else {
            response.status(404).json({ message: 'No students found'});
        }
    } catch (error) {
        console.error(error);

        response.status(500).json('Internal server error');
    }
});

studentsRouter.get('/:fn', async (request: Request, response: Response) => {
    const { fn } =  request.params;

    try {
        const student = await studentsController.getStudentByFn(Number(fn));
    
        if (student) {
            response.status(200).json(student);
        } else {
            response.status(404).json({ message: "Student not found" });
        }
    } catch (error) {
        console.error(error);

        response.status(500).json('Internal server error');
    }
});

studentsRouter.post('/', async (request: Request, response: Response) => {
    const student: IStudent = request.body;

    try {
        const newStudent = await studentsController.addStudent(student);

        if (newStudent) {
            response.status(201).json({ message: "Student added successfully" });
        } else {
            response.status(400).json({ message: 'Student failed to be added' });
        }
    } catch(error) {
        console.error(error);
        response.status(500).json({ error: "Internal server error"});
    }
});

studentsRouter.put('/:fn', async (request: Request, response: Response) => {
    const { fn } = request.params;
    const studentData = request.body;

    try {
        const updatedStudent = await studentsController.updateStudentData(Number(fn), studentData);

        if (updatedStudent == 1) {
            response.status(200).json({ message: 'Student updated successfully' });
        } else {
            response.status(404).json({ message: 'Student mnot found' });
        }

    } catch(error) {
        console.error(error);

        response.status(500).json({ error: 'Internal server error' });
    }
});

studentsRouter.patch('/:fn', async (request: Request, response: Response) => {
    const { fn } = request.params;
    const { marks } = request.body;

    try {
        const studentData = {
            marks
        };

        const updatedStudent = await studentsController.updateStudentData(Number(fn), studentData as IStudent);

        if (updatedStudent == 1) {
            response.status(200).json({ message: 'Student updated successfully' });
        } else {
            response.status(404).json({ message: 'Student mnot found' });
        }
    } catch(error) {
        console.error(error);

        response.status(500).json({ error: 'Internal server error' });
    }
});

studentsRouter.delete('/:fn', async (request: Request, response: Response) => {
    const { fn } = request.params;

    try {
        const deletedStudent = await studentsController.deleteStudentByFn(Number(fn));

        if (deletedStudent == 1) {
            response.status(200).json({ message: "Student deleted successfully" });
        } else {
            response.status(404).json({ message: 'Student not found' });
        }
    } catch(error) {
        console.error(error);

        response.status(500).json({ error: 'Internal server error' });
    }
});

export default studentsRouter;