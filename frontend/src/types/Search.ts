import { Notebook } from "@/types/notebook";
import {EventType} from "@/types/EventType.ts";
import {Note} from "@/types/note";

export type SearchRequest = {
    q: string;
    type?: ("notes" | "notebooks" | "events")[];
};

export type SearchResponse = {
    q: string;
    notebooks?: Notebook[];
    events?: EventType[];
    notes?: Note[];
}