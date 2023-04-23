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
        await studentsController.init();

        next();
    } catch(error) {
        console.error(error);
        response.status(500).json({ error: 'Internal server error' });
    }
};

studentsRouter.use(getStudentsController);

studentsRouter.get('/', (request: Request, response: Response) => {
    // read(studentsJSON)
    //     .then(studentsData => JSON.parse(studentsData))
    //     .then((parsedData: IStudentsData) => response.status(200).json(parsedData))
    //     .catch(error => {
    //         console.error(error);
    //         response.status(500).json({ error: 'Internal server error' })
    //     });

    const students = studentsController.getStudentsData();
    response.status(200).json(students);
});

studentsRouter.get('/:fn', (request: Request, response: Response) => {
    const { fn } =  request.params;

    // read(studentsJSON)
    //     .then(studentsData => JSON.parse(studentsData))
    //     .then((parsedData: IStudentsData) => {
    //         const student = parsedData.students.filter(student => student.fn === Number(fn))

    //         if (student.length > 0) {
    //             response.status(200).json(student);
    //         } else {
    //             response.status(404).json({ message: "Student not found" });
    //         }
    //     })
    //     .catch(error => {
    //         console.error(error);
    //         response.status(500).json({ error:  'Interal server error' });
    //     });

    const student = studentsController.getStudentByFn(Number(fn));

    if (student) {
        response.status(200).json(student);
    } else {
        response.status(404).json({ message: "Student not found" });
    }
});

studentsRouter.post('/', async (request: Request, response: Response) => {
    const student: IStudent = request.body;

    // read(studentsJSON)
    //     .then(studentsData => JSON.parse(studentsData))
    //     .then((parsedData: IStudentsData) => {
    //         parsedData.students.push(student);

    //         return JSON.stringify(parsedData);
    //     })
    //     .then(updatedStudents => write(studentsJSON, updatedStudents))
    //     .then(() => response.status(201).json({ message: "Student added successfully" }))
    //     .catch(error => {
    //         console.error(error);

    //         response.status(500).json({ error: "Internal server error"});
    //     });

    try {
        await studentsController.addStudent(student);

        response.status(201).json({ message: "Student added successfully" });
    } catch(error) {
        console.error(error);
        response.status(500).json({ error: "Internal server error"});
    }
});

studentsRouter.put('/:fn', async (request: Request, response: Response) => {
    const { fn } = request.params;
    const studentData = request.body;

    try {
        const students = await read(studentsJSON);
        const parsedStudents = JSON.parse(students);

        const updatedStudents = parsedStudents.students.map(student => {
            if (student.fn === Number(fn)) {
                return studentData;
            }

            return student;
        });

        parsedStudents.students = updatedStudents;

        await write(studentsJSON, JSON.stringify(parsedStudents));

        response.status(200).json({ message: 'Student updated successfully' });
    } catch(error) {
        console.error(error);

        response.status(500).json({ error: 'Internal server error' });
    }
});

studentsRouter.patch('/:fn', async (request: Request, response: Response) => {
    const { fn } = request.params;
    const { mark } = request.body;

    try {
        const students = await read(studentsJSON);
        const parsedStudents = JSON.parse(students);

        const updatedStudents = parsedStudents.students.map(student => {
            if (student.fn === Number(fn)) {
                student.mark = mark;
            }

            return student;
        });

        parsedStudents.students = updatedStudents;

        await write(studentsJSON, JSON.stringify(parsedStudents));

        response.status(200).json({ message: 'Student updated successfully' });
    } catch(error) {
        console.error(error);

        response.status(500).json({ error: 'Internal server error' });
    }
});

studentsRouter.delete('/:fn', async (request: Request, response: Response) => {
    const { fn } = request.params;

    try {
        const students = await read(studentsJSON);
        const parsedStudents = JSON.parse(students);

        const updatedStudents = parsedStudents.students.filter(student => student.fn !== Number(fn));
        parsedStudents.students = updatedStudents;

        await write(studentsJSON, JSON.stringify(parsedStudents));

        response.status(200).json({ message: "Student deleted successfully" });
    } catch(error) {
        console.error(error);

        response.status(500).json({ error: 'Internal server error' });
    }
});

export default studentsRouter;