const express = require('express');
const { read, write } = require('../utils/file-utils');

const studentsRouter = express.Router();
const studentsJSON = 'resources/students.json';

studentsRouter.get('/', (request, response) => {
    read(studentsJSON)
        .then(studentsData => JSON.parse(studentsData))
        .then(parsedData => response.status(200).json(parsedData))
        .catch(error => {
            console.error(error);
            response.status(500).json({ error: 'Internal server error' })
        });
});

studentsRouter.get('/:fn', (request, response) => {
    const { fn } =  request.params;

    read(studentsJSON)
        .then(studentsData => JSON.parse(studentsData))
        .then(parsedData => {
            const student = parsedData.students.filter(student => student.fn === Number(fn))

            if (student.lenght > 0) {
                response.status(200).json(student);
            } else {
                response.status(404).json({ message: "Student not found" });
            }
        })
        .catch(error => {
            console.error(error);
            response.status(500).json({ error:  'Interal server error' });
        });
});

studentsRouter.post('/', (request, response) => {
    const student = request.body;

    read(studentsJSON)
        .then(studentsData => JSON.parse(studentsData))
        .then(parsedData => {
            parsedData.students.push(student);

            return JSON.stringify(parsedData);
        })
        .then(updatedStudents => write(studentsJSON, updatedStudents))
        .then(() => response.status(201).json({ message: "Student added successfully" }))
        .catch(error => {
            console.error(error);

            response.status(500).json({ error: "Internal server error"});
        });
});

studentsRouter.put('/:fn', async (request, response) => {
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

studentsRouter.patch('/:fn', async (request, response) => {
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

studentsRouter.delete('/:fn', async (request, response) => {
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

module.exports = { studentsRouter };