import {Request, Response} from "express";
import {handleRepositoryErrors, parseRequest} from "../utils";
import {searchRequestSchema} from "./validationSchemas";
import {SearchResponse} from "./types";
import {eventRepository} from "../event/repository";
import {notebookRepository} from "../notebook/repository";
import {noteRepository} from "../note/repository";


const typeToRepo = {
    events: eventRepository,
    notebooks: notebookRepository,
    notes: noteRepository
};

const get = async (req: Request, res: Response): Promise<void> => {
    const userId = req.session.passport?.user.id;
    const request = await parseRequest(searchRequestSchema, req, res);
    if (!userId || !request) {
        return;
    }

    const search: string = request.query.q;
    const response: SearchResponse = {query: search};

    for (const type of request.query.type) {
        const repo = typeToRepo[type];
        if (!repo) continue;
        const result = await repo.search(search, userId);
        if (result.isErr) {
            return handleRepositoryErrors(result.error, res);
        }


        if (result.value.length > 0) {
            // @ts-expect-error // TODO this surely works
            response[`${type}`] = result.unwrap();
        }
    }

    res.status(200).send(response);
}

export const searchController = {
    get
}
