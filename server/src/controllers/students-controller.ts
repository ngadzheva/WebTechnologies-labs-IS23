import { IStudent, IStudentsData } from "../interfaces/students";
import { readFile, write } from "../utils/file-utils";
import { DataBase } from '../db/index';
import { MongoClient } from "mongodb";

const studentsJSON: string = 'resources/students.json';
const studentsCollection = 'students';

export class StudentsController {
    private studentsData: IStudentsData;
    private studentsCollection;

    constructor() {}

    public async init() {
        try {
            const db = await new DataBase().connectDB();
            this.studentsCollection = await db.collection('students');
        } catch (error) {
            console.error(error);
        }

        // const studentsData = await readFile(studentsJSON);
        
        // this.studentsData = JSON.parse(studentsData);
    }

    public async getStudentsData(): Promise<IStudentsData> {
        return this.studentsCollection.find({});
        //return this.studentsData;
    }

    public async getStudentByFn(fn: number): Promise<IStudent | undefined> {
        const student = await this.studentsCollection.findOne({ fn });
        // const student = this.studentsData.students.filter(student => student.fn === fn)

        return student;
    }

    public async addStudent(student: IStudent): Promise<void> {
        student.fn = Number(student.fn);
        student.marks = student.marks.map(mark => Number(mark));
        
        this.studentsCollection.insertOne(student);

        // this.studentsData.students.push(student);

        // await this.saveStudentsData();
    }

    public async deleteStudentByFn(studentFn: number): Promise<void> {
        this.studentsCollection.deleteOne({ fn: studentFn });

        // const updatedStudents = this.studentsData.students.filter(student => student.fn !== studentFn);
        // this.studentsData.students = updatedStudents;

        // await write(studentsJSON, JSON.stringify(this.studentsData));
    }

    private async saveStudentsData(): Promise<void> {
        await write(studentsJSON, JSON.stringify(this.studentsData));
    }
}