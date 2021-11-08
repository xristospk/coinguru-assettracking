import { Component, Inject } from '@angular/core';
import { CoinMarketCapService } from '../../common/services/coinmarketcap.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CryptoCurrency } from '../../common/models/coinMarketCapApiResultEntity';

@Component({
    selector: 'assets',
    templateUrl: './assets.component.html',
    styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
    hideZeroValues: boolean = true;

    public cryptoCurrencies: Array<CryptoCurrency> = new Array<CryptoCurrency>();

    //Define your invested fiat money here
    invested:number = 1000;
    
    assetsValue: number = 0;
    assetsBTCValue: number = 0;

    //Define your assets here
    currencyAssets: { [symbol: string]: number; } = {
        "BTC": 0.03938556,
        "XLM": 207.73633725,
        "KMD": 38.16751564,
        "XVG": 206.296,
        "SC": 1620.755,
    };

    constructor(private cmcService: CoinMarketCapService) {}

    hideZeroChanged(event: any) {
        this.hideZeroValues = event.target.checked;
    }

    ngOnInit(): void {
        // debugger;
        this.cmcService.getCryptoCurrencies().subscribe(cryptoCurrencies => {
            const btcCurrency = cryptoCurrencies.find(cc => cc.symbol == "BTC");
            if(!btcCurrency)
                throw new Error("BTC currency not found in CoinMarketCap API Response.");

            cryptoCurrencies.forEach(cryptoCurrency => {

                var currencyAssetAmount = this.currencyAssets[cryptoCurrency.symbol];
                if (currencyAssetAmount) {
                    cryptoCurrency.amount = currencyAssetAmount;
                    this.assetsValue += currencyAssetAmount * cryptoCurrency.quote.EUR.price;
                    this.assetsBTCValue += currencyAssetAmount * this.getAssetsBTCValue(cryptoCurrency, btcCurrency);
                } else {
                    cryptoCurrency.amount = 0;
                }
            });
            this.cryptoCurrencies = cryptoCurrencies;
        });
    }

    private getAssetsBTCValue(asset: CryptoCurrency, btcCurrency: CryptoCurrency): number {
        const assetBTCValue = asset.quote.EUR.price / btcCurrency.quote.EUR.price;
        return assetBTCValue;
    }

}
