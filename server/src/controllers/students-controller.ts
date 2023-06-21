import { IStudent, IStudentsData } from "../interfaces/students";
import { readFile, write } from "../utils/file-utils";
import { DataBase } from '../db/index';
import { MongoClient } from "mongodb";
import { Student } from "../models/student";
import mongoose from "mongoose";

const studentsJSON: string = 'resources/students.json';
const studentsCollection = 'students';

export class StudentsController {
    private studentsData: IStudentsData;
    private studentsCollection;

    constructor() {}

    public async getStudentsData() {
        return await Student.find({})
            .sort({firstName: 1, fn: -1})
            .limit(2)
            .select({lastName: true, fn: true});
    }

    public async getStudentByFn(fn: number) {
        return await Student.findOne({ fn });
    }

    public async addStudent(student: IStudent) {
        student.fn = Number(student.fn);
        student.marks = student.marks.map(mark => Number(mark));
        
        const newStudent = new Student({
            _id: new mongoose.Types.ObjectId(),
            ...student
        });

        return await newStudent.save();
    }

    public async deleteStudentByFn(studentFn: number) {
        const result = await Student.deleteOne({ fn: studentFn });

        return result.deletedCount;
    }

    public async updateStudentData(fn: number, studentData: IStudent) {
        const result = await Student.updateOne({ fn }, { ...studentData });

        return result.modifiedCount;
    }
}