import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

import { SearcherComponent } from "./components/searcher/searcher.component";
import { ResultsComponent } from "./components/results/results.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";

import { InputTextModule } from "primeng/inputtext";
import { DataViewModule } from "primeng/dataview";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { SkeletonModule } from "primeng/skeleton";
import { ProgressSpinnerModule } from "primeng/progressspinner";

import { MarvelInterceptor } from "./interceptors/marvel/marvel.interceptor";
import { LoaderInterceptor } from "./interceptors/loader/loader.interceptor";

@NgModule({
	declarations: [
		AppComponent,
		SearcherComponent,
		ResultsComponent,
		HeaderComponent,
		FooterComponent,
		LoaderComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NoopAnimationsModule,
		FormsModule,
		InputTextModule,
		DataViewModule,
		DropdownModule,
		ButtonModule,
		DialogModule,
		SkeletonModule,
		ProgressSpinnerModule,
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoaderInterceptor,
			multi: true,
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: MarvelInterceptor,
			multi: true,
		},
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
