import { StoryItem } from "./StoryItem";

export interface Story {
	available: number;
	collectionURI: string;
	items: StoryItem[];
	returned: number;
}
