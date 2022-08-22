import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResultsComponent } from "./components/results/results.component";
import { SearcherComponent } from "./components/searcher/searcher.component";

const routes: Routes = [
	{ path: "", redirectTo: "/search", pathMatch: "full" },
	{ path: "search", component: SearcherComponent },
	{ path: "results", component: ResultsComponent },
	{ path: "**", redirectTo: "/search" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
