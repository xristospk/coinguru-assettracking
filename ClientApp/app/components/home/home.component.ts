import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { createParameter } from 'typescript';
import { CryptoCurrency } from '../../common/models/coinMarketCapApiResultEntity';
import { CurrencyViewModel } from '../../common/models/currencyViewModel';
import { CoinMarketCapService } from '../../common/services/coinmarketcap.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public hideZeroValues: boolean = true;
    public cryptoCurrencies: Array<CurrencyViewModel> = new Array<CurrencyViewModel>();
    public assetsValue: number = 0;
    public assetsBTCValue: number = 0;

    //Define your invested fiat money here
    public invested: number = 1000;

    //Define your assets here
    public currencyAssets: { [symbol: string]: number; } = {
        "BTC": 0.03938556,
        "XLM": 207.73633725,
        "KMD": 38.16751564,
        "XVG": 206.296,
        "SC": 1620.755,
    };

    ngOnInit(): void {
        this.cmcService.getCryptoCurrencies().subscribe(cryptoCurrencies => {
            const btcCurrency = cryptoCurrencies.find(cc => cc.symbol == "BTC");
            if (!btcCurrency)
                throw new Error("BTC currency not found in CoinMarketCap API Response.");    

            cryptoCurrencies.forEach(x => {
                var currency = new CurrencyViewModel();
                currency.rank = x.cmc_rank;
                currency.name = x.name;
                currency.symbol = x.symbol;
                currency.amount = this.currencyAssets[x.symbol];
                currency.value_eur = x.quote.EUR.price;
                currency.value_btc = x.quote.EUR.price / btcCurrency.quote.EUR.price;
                currency.percent_change_1h = x.quote.EUR.percent_change_1h.toFixed(2);
                currency.percent_change_24h = x.quote.EUR.percent_change_24h.toFixed(2);
                currency.percent_change_7d = x.quote.EUR.percent_change_7d.toFixed(2);
                currency.percent_change_30d = x.quote.EUR.percent_change_30d.toFixed(2);
                this.cryptoCurrencies.push(currency);
    
                if(!this.currencyAssets[x.symbol])
                     return;
    
                this.assetsValue += currency.amount * currency.value_eur;
                this.assetsBTCValue += currency.amount * currency.value_btc;
            });
        });
    }

    constructor(private cmcService: CoinMarketCapService) {
    }

    hideZeroChanged(event: any) {
        this.hideZeroValues = event.target.checked;
    }    
}