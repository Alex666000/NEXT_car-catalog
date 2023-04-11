import axios from "axios";
import {IUser} from "@/interfaces/car.interface";

// const API_URL = "https://jsonplaceholder.typicode.com";

axios.defaults.baseURL = process.env.API_URL;

export const UserService = {
    async getAll() {
        // сразу распаковываем users
        const {users} = await axios.get<IUser[]>("/users");
        return users;
    },
    async getById(id: string) {
        const {users} = await axios.get<IUser[]>("/users", {
            params: {
                id
            }
        });
        return users[0];
    }
};