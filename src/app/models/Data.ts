import { Character } from "./Character";

export interface Data {
	count: number;
	limit: number;
	offset: number;
	results: Character[];
	total: number;
}
