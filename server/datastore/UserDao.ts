import { User } from "../types";

export interface UserDao {
    createUser (user : User) : void ;
    getUserByUsername (email : string) : User | undefined;
    getUserByEmail (email : string) : User | undefined;
}