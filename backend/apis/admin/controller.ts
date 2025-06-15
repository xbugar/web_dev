import {Request, Response} from "express";

async function getAdminData(req: Request, res: Response) {
    if (req.user === undefined) {
        res.status(401).send({message: "session expired"});
        return;
    }
    res.status(200).send({message: "session still active"});
}
export const adminController = {
    getAdminData
}

