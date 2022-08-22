import { ComicItem } from "./ComicItem";

export interface Comic {
	available: number;
	collectionURI: string;
	items: ComicItem[];
	returned: number;
}
