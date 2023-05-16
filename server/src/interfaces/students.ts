export interface IStudent {
    firstName: string;
    lastName: string;
    fn: number;
    marks: Array<number>;
};

export interface IStudentsData {
    students: IStudent[];
};
