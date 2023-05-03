import { IUser, IUsersData } from "../interfaces/users";
import { readFile, write } from "../utils/file-utils";
import * as bcrypt from 'bcrypt';

const usersJSON: string = 'resources/users.json';

export class UsersController {
    private usersData: IUsersData;

    constructor() {}

    public async init() {
        const usersData = await readFile(usersJSON);
        
        this.usersData = JSON.parse(usersData);
    }

    public getUsersData(): IUsersData {
        return this.usersData;
    }

    public async createUser(userData: IUser) {
        const userExists = this.userExists(userData.username);

        if (userExists) {
            return {
                success: false,
                message: "User already exists"
            };
        }

        const passwordHash = await bcrypt.hash(userData.password, 10);
        userData.password = passwordHash;
        this.usersData.users.push(userData);
        await this.saveUsersData();

        return {success: true, message: 'User created successfully'};
    }

    private userExists(username): IUser {
        return this.usersData.users.find(user => user.username === username);
    }

    public async validUser(username, password) {
        const user = this.userExists(username);

        if (user) {
            const validPassword = await bcrypt.compare(password, user.password);

            if (validPassword) {
                return { success: true };
            }

            return { success: false, message: 'Password is incorrect' };
        }

        return { success: false, message: 'Username is not correct' };
    }

    private async saveUsersData(): Promise<void> {
        await write(usersJSON, JSON.stringify(this.usersData));
    }

    public validateUserData(userData) {
        if (userData.username === '' || userData.username.length < 3) {
            return {
                valid: false,
                message: 'Username must be at least 3 characters'
            };
        }

        if (userData.password === '' || userData.password.length < 9) {
            return {
                valid: false,
                message: 'Password must be at least 9 characters'
            };
        }

        if (userData.password !== userData.confirmPassword) {
            return {
                valid: false,
                message: 'Confirm password must match passsword'
            };
        }

        return {
            valid: true
        };
    }
}