import { Notebook } from "@/types/Notebook.ts";
import {Event} from "@/types/EventType.ts";
import {Note} from "@/types/Note.ts";

export type SearchRequest = {
    q?: string;
    // type?: ("notes" | "notebooks" | "events")[];
};

export type Filters<T> = Partial<T>

export type SearchResponse = {
    q: string;
    notebooks?: Notebook[];
    events?: Event[];
    notes?: Note[];
}