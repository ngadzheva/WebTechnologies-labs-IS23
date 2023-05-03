import { IStudent, IStudentsData } from "../interfaces/students";
import { readFile, write } from "../utils/file-utils";

const studentsJSON: string = 'resources/students.json';

export class StudentsController {
    private studentsData: IStudentsData;

    constructor() {}

    public async init() {
        const studentsData = await readFile(studentsJSON);
        
        this.studentsData = JSON.parse(studentsData);
    }

    public getStudentsData(): IStudentsData {
        return this.studentsData;
    }

    public getStudentByFn(fn: number): IStudent | undefined {
        const student = this.studentsData.students.filter(student => student.fn === fn)

        if (student.length > 0) {
            return student[0];
        } else {
            return undefined;
        }
    }

    public async addStudent(student: IStudent) {
        student.fn = Number(student.fn);
        student.mark = Number(student.mark);
        
        this.studentsData.students.push(student);

        await this.saveStudentsData();
    }

    public async deleteStudentByFn(studentFn: number) {
        const updatedStudents = this.studentsData.students.filter(student => student.fn !== studentFn);
        this.studentsData.students = updatedStudents;

        await write(studentsJSON, JSON.stringify(this.studentsData));
    }

    private async saveStudentsData(): Promise<void> {
        await write(studentsJSON, JSON.stringify(this.studentsData));
    }
}