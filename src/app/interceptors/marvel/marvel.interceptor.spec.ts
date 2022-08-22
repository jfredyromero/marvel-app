import { TestBed } from "@angular/core/testing";

import { MarvelInterceptor } from "./marvel.interceptor";

describe("MarvelInterceptor", () => {
	beforeEach(() => TestBed.configureTestingModule({
		providers: [
			MarvelInterceptor,
		],
	}));

	it("should be created", () => {
		const interceptor: MarvelInterceptor = TestBed.inject(MarvelInterceptor);
		expect(interceptor).toBeTruthy();
	});
});
