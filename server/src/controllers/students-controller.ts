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
        this.studentsData.students.push(student);

        await this.saveStudentsData();
    }

    private async saveStudentsData(): Promise<void> {
        await write(studentsJSON, JSON.stringify(this.saveStudentsData));
    }
}