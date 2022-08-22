import { Data } from "./Data";

export interface Response {
	attributionHTML: string;
	attributionText: string;
	code: number;
	copyright: string;
	data: Data;
	etag: string;
	status: string;
}
