import { Request, Response } from "express";

const insertUsers = (deps: DepsType) => async (req: Request, res: Response) => {
    console.log("Hello", deps);
};

const getAllUsers = (deps: DepsType) => async (req: Request, res: Response) => {
    console.log("Hello", deps);
};

const getUsersById =
    (deps: DepsType) => async (req: Request, res: Response) => {
        console.log("Hello", deps);
    };

const updateUsersById =
    (deps: DepsType) => async (req: Request, res: Response) => {
        console.log("Hello", deps);
    };

const deleteUsersById =
    (deps: DepsType) => async (req: Request, res: Response) => {
        console.log("Hello", deps);
    };

export {
    insertUsers,
    getAllUsers,
    getUsersById,
    updateUsersById,
    deleteUsersById
};
