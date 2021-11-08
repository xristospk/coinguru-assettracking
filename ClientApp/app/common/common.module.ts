import { NgModule } from '@angular/core';
import { CoinguruHttpClient } from './services/coinguruHttpClient.service';
import { CoinMarketCapService } from './services/coinmarketcap.service';

@NgModule({
    providers: [CoinguruHttpClient, CoinMarketCapService]
})
export class AppCommonModule { }