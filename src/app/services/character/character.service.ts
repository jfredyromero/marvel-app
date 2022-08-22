import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Endpoints } from "src/app/enums/Endpoints";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class CharacterService {
	constructor(private http: HttpClient) {}

	getAllCharacters() {
		return this.http.get<any>(
			environment.marvelApi + Endpoints.getAllCharacters
		);
	}

	searchForCharacters(query: string, offset: number, limit: number) {
		return this.http.get<any>(
			environment.marvelApi + Endpoints.searchForCharacters + query,
			{
				params: new HttpParams()
					.set("offset", offset)
					.set("limit", limit),
			}
		);
	}

	getCharacterById(id: number) {
		return this.http.get<any>(
			environment.marvelApi + Endpoints.getCharacterById + id
		);
	}
}
