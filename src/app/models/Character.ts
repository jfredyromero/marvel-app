import { Comic } from "./Comic";
import { Story } from "./Story";
import { Thumbnail } from "./Thumbnail";
import { URL } from "./URL";

export interface Character {
	comics: Comic;
	description: string;
	events: Comic;
	id: number;
	modified: string;
	name: string;
	resourceURI: string;
	series: Comic;
	stories: Story;
	thumbnail: Thumbnail;
	urls: URL[];
}
