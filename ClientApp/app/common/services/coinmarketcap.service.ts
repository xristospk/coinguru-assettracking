import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { CryptoCurrency, CoinMarketCapApiResultEntity } from '../models/coinMarketCapApiResultEntity';
import { CoinMarketCapMockResponse } from '../models/exampleCMCResponse'

@Injectable()
export class CoinMarketCapService {

    private coinMarketCapApiUrl: string = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
    private API_KEY: string = "your-coin-market-cap-api-key";

    constructor(private http: Http) {
    }

    private handleError(error: any): Promise<any> {
        debugger;
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    public getCryptoCurrencies(): Observable<Array<CryptoCurrency>> {
        //https://coinmarketcap.com/api/documentation/v1/#section/Authentication
        const headers = new Headers().append("X-CMC_PRO_API_KEY", this.API_KEY);
        var queryUrl = this.coinMarketCapApiUrl + "?start=1&limit=1000&convert=EUR"
        return this.http.get(queryUrl)
        .map(r => r.json() as CoinMarketCapApiResultEntity)
        .map(r => r.data)
        .catch(this.handleError);
    }

    public getCryptoCurrenciesMock(): Array<CryptoCurrency> {
        let jsonString: string = CoinMarketCapMockResponse.apiResponse;
        let entity: CoinMarketCapApiResultEntity = JSON.parse(jsonString);
        return entity.data;
    }
}