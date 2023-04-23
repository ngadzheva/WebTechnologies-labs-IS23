export interface IStudent {
    firstName: string;
    lastName: string;
    fn: number;
    mark: number;
};

export interface IStudentsData {
    students: IStudent[];
};
