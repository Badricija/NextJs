import { compare } from "bcrypt";
import connect from "../mongo/db";
import UserModel, { IUser } from "../models/User";

interface UserLoginData {
    email: string;
    password: string;
}

export const loginUser = async ({
    email,
    password
}: UserLoginData): Promise<IUser | null> => {
    await connect();

    if (!email || !password) {
        throw new Error("Email or password not provided.");
    }

    const user: IUser | null = await UserModel.findOne({ email });
    if (!user) {
        throw new Error(`Email ${email} does not exist in the database.`);
    }

    if (user.password) {
        const isValid = await compare(password, user.password);

        if (!isValid) {
            throw new Error("Incorrect password, please try again.");
        }
    } else {
        throw new Error("An unexpected error occurred, please try again.");
    }

    return user;
};
