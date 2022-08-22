import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LazyLoadEvent, SelectItem } from "primeng/api";
import { Subject } from "rxjs";
import { Character } from "src/app/models/Character";
import { Data } from "src/app/models/Data";
import { Response } from "src/app/models/Response";
import { CharacterService } from "src/app/services/character/character.service";
import { LoaderService } from "src/app/services/loader/loader.service";

@Component({
	selector: "app-results",
	templateUrl: "./results.component.html",
	styleUrls: ["./results.component.scss"],
})
export class ResultsComponent {
	characters: Character[];
	sortOptions: SelectItem[];
	sortOrder: number;
	sortField: string;
	totalRecords: number;
	first: number;
	rows: number;
	isDialogActive: boolean;
	modalCharacter?: Character;
	isLoading: Subject<boolean>;
	query: string;

	constructor(
		private characterService: CharacterService,
		private route: ActivatedRoute,
		private loaderService: LoaderService
	) {
		this.characters = [];
		this.first = 0;
		this.rows = 12;
		this.totalRecords = 0;
		this.query = this.route.snapshot.paramMap.get("query") ?? "";
		this.characterService
			.searchForCharacters(this.query, this.first, this.rows)
			.subscribe((response: Response) => {
				this.characters = response.data.results;
				this.totalRecords = response.data.total;
				this.first = response.data.offset;
				// console.log(response);
			});
		this.sortOptions = [
			{ label: "Name from A to Z", value: "name" },
			{ label: "Name from Z to A", value: "!name" },
		];
		this.sortOrder = 1;
		this.sortField = "name";
		this.isDialogActive = false;
		this.isLoading = this.loaderService.isLoading;
	}
	onSortChange(event: { value: any }) {
		const value = event.value;
		if (value.indexOf("!") === 0) {
			this.sortOrder = -1;
			this.sortField = value.substring(1, value.length);
		} else {
			this.sortOrder = 1;
			this.sortField = value;
		}
	}
	showDialog(id: number) {
		this.modalCharacter = undefined;
		this.isDialogActive = true;
		this.characterService
			.getCharacterById(id)
			.subscribe((response: Response) => {
				this.modalCharacter = response.data.results[0];
			});
	}
	loadData(event: LazyLoadEvent) {
		if (event.first !== undefined) {
			this.first = event.first;
		}
		this.characterService
			.searchForCharacters(this.query, this.first, this.rows)
			.subscribe((response: Response) => {
				this.characters = response.data.results;
				this.totalRecords = response.data.total;
				this.first = response.data.offset;
			});
	}
}
