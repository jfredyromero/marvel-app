import { ItemType } from "../enums/ItemType";

export interface StoryItem {
	name: string;
	resourceURI: string;
	type: ItemType;
}
