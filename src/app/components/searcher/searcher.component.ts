import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-searcher",
	templateUrl: "./searcher.component.html",
	styleUrls: ["./searcher.component.scss"],
})
export class SearcherComponent {
	query: string;
	constructor(private router: Router) {
		this.query = "";
	}
	searchHero() {
		this.router.navigate(["/results", { query: this.query }]);
	}
}
