import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { CmcService } from '../../common/services/cmc.service';
import { Coin } from '../../common/models/coin';
import { Asset } from '../../common/models/asset';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'ulfik',
    templateUrl: './ulfik.component.html',
    styleUrls: ['./ulfik.component.css']
})
export class UlfikComponent implements OnInit {
    hideZeroValues: boolean = true;

    public coins: Array<Coin>;

    invested:number = 1000;
    assetsValue: number = 0;
    assetsBTCValue: number = 0;

    assets: { [symbol: string]: number; } = {
        "BTC": 0.03938556,
        "XLM": 207.73633725,
        "KMD": 38.16751564,
        "XVG": 206.296,
        "SC": 1620.755,
    };

    constructor(private cmcService: CmcService) {}

    hideZeroChanged(event: any) {
        this.hideZeroValues = event.target.checked;
    }

    ngOnInit(): void {
        // debugger;
        this.cmcService.getCoins().subscribe(response => {
            response.forEach(coin => {

                var assetAmount = this.assets[coin.symbol];
                if (assetAmount) {
                    coin.amount = assetAmount;
                    this.assetsValue += assetAmount * coin.price_eur;
                    this.assetsBTCValue += assetAmount * coin.price_btc;
                } else {
                    coin.amount = 0;
                }
            });
            this.coins = response;
        });
    }

}
