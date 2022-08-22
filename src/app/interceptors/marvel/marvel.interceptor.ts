import { Injectable } from "@angular/core";
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpParams,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Md5 } from "ts-md5";

@Injectable()
export class MarvelInterceptor implements HttpInterceptor {
	private ts: string;
	private apikey: string;
	private hash: string;
	constructor() {
		this.ts = Date.now().toString();
		this.apikey = environment.publicKey;
		this.hash = Md5.hashStr(this.ts + environment.privateKey + this.apikey);
	}
	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const finalRequest: HttpRequest<unknown> = request.clone({
			params: request.params
				.append("ts", this.ts)
				.append("apikey", this.apikey)
				.append("hash", this.hash),
		});
		return next.handle(finalRequest);
	}
}
