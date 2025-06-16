import { Notebook } from "@/types/notebook";
import { Event } from "@/types/event";
import {Note} from "@/types/note";

export type SearchRequest = {
    q?: string;
    // type?: ("notes" | "notebooks" | "events")[];
};

export type SearchResponse = {
    q?: string;
    notebooks?: Notebook[];
    events?: Event[];
    notes?: Note[];
}