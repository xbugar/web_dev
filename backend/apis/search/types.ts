import {NotebookResponse} from "../notebook/types";
import {Note} from "@prisma/client";
import {EventResponse} from "../event/types";
import {FlashdeckResponse} from "../deck/types";


export type SearchResponse = {
    query: string,
    notebooks?: NotebookResponse[],
    notes?: Note[],
    events?: EventResponse[],
    decks?: FlashdeckResponse[],
}