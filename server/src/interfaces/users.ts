export interface IUser {
    username: string;
    password: string;
    email?: string;
};

export interface IUsersData {
    users: IUser[];
};