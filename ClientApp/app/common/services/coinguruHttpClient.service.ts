import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';

@Injectable()
export class CoinguruHttpClient {
    
    constructor(private http: Http) {}

    get(url:string, apiKey: string) {
        let headers = new Headers();
        headers.append('X-CMC_PRO_API_KEY', apiKey);

        return this.http.get(url, {
            headers: headers
        });
    }

    post(url:string, apiKey: string, data: any) {
        let headers = new Headers();
        headers.append('X-CMC_PRO_API_KEY', apiKey);

        return this.http.post(url, data, {
            headers: headers
        });
    }
}