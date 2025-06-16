import { Notebook } from "@/types/notebook";
import { Event } from "@/types/event";
import {Note} from "@/types/note";
import {Flashdeck} from "@/types/flashdeck.ts";

export type SearchRequest = {
    q?: string;
    type?: ("notes" | "notebooks" | "events" | "decks")[];
};

export type SearchResponse = {
    q?: string;
    notebooks?: Notebook[];
    events?: Event[];
    notes?: Note[];
    decks?: Flashdeck[];
}