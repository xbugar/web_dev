import { Notebook } from "@/types/Notebook.ts";
import {EventType} from "@/types/EventType.ts";
import {Note} from "@/types/Note.ts";

export type SearchRequest = {
    q: string;
    // type?: ("notes" | "notebooks" | "events")[];
};

export type SearchResponse = {
    q: string;
    notebooks?: Notebook[];
    events?: EventType[];
    notes?: Note[];
}