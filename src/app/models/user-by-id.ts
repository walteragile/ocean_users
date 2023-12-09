import { User } from "./user";

export interface UserById extends User {
    dateOfBirth: string,
    email: string,
    gender: string,
    location: string,
    phone: string,
    registerDate: string,
    updatedDate: string
}
